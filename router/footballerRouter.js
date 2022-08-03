
const express = require('express');
const router = express.Router(); // bu dosyada tanımlanan istekerin main dosyamız olan app.js tarafından tanınması için eklenir.

const validateFunction = require('../controller/validate'); // validate işlemlerini yaptığımız yapıyı bu modüle dahil eder. 
const data = require('../data/readWrite'); // dosya okuma ve yazma işlemlerini yaptığımız yapıyı dahil eder.

/* 
    Programımıza örnek olarak aşağıdaki dizi verilmiştir. 
*/ 
let footballers = [
    { id: 1, name: 'ronaldo', age: 37 },
    { id: 2, name: 'messi', age: 35 },
    { id: 3, name: 'mbappe', age: 23 },
    { id: 4, name: 'levandowski', age: 37 },
    { id: 5, name: 'neymar', age: 30 },
];

// /player get istekleri aşağıdaki yapıyı çalıştırır. 
router.get('/', (req, res) => {
    console.log('footballers listesi yazdırılıyor');
    let readedData = data.readWrite.fileRead(); // verilerimizin bulunduğu footballers.json dosyasını okuma işlemi yapar.
    res.send(readedData); // okunan veriyi response olarak gönderir.
});

// /player/query?reverse=true veya /player/query?reverse=true şeklinde bir get isteği alındığında bu yapı çalışır
router.get('/query', (req, res) => {
    let queryValue = req.query.reverse; // query olarak gelen istek bu değişkende tutulur.
    if (queryValue === 'true') { // eğer query olarak true değeri girilmişse if yapısı çalışır ve verilerimiz tersten yazdırılır
        console.log('footballers dizisi tersten yazdırılıyor...');
        res.send(footballers.reverse()); // footballsers.json dosyasındaki veriler tersten response olarak gönderilmiştir.
        /* 
            burada tekrardan reverse() işlemi yapma sebebimiz; eğer ard arda true parametresi verilirse verilerimiz
            sürekli reverse() işlemi uygulanmadan görüntülenmesi için yazılmıştır.
        */
        return footballers.reverse(); 
    };

    console.log('footballers dizisi normal yazdırılıyor...');
    res.send(footballers); // veriler normal düzende response gönderilir.
});

// /player/2 gibi bir get isteği aldığında bu yapı çalışır
router.get('/:id', (req, res) => {
    const reqID = parseInt(req.params.id); // request olarak verilen parametre default olarak string gelir biz bununla işlem yapmak için integer a parse ederiz.

    if (!isNaN(reqID)) { // eğer verimiz bir number ise bu yapı çalışır.

        let readedData = data.readWrite.fileRead(); // kisiler.json dosyasında bulunan veriler okunur.

        const result = readedData.find(value => value.id === reqID); // istek yapılan id ye ait footballer var mı diye kontrol eder.
        if (result) { // eğer varsa result değeri olarak istek yapılan id ye sahip değer döner.
            console.log(`${reqID} id li futbolcu yazdırılıyor...`);
            return res.send(result);
        }

        // eğer get isteği yapılan id değeri footballer.json dosyasında bulunmuyorsa burası çalışır. 
        console.log(`${reqID} id li futbolcu dizide bulunamadı!`);
        res.status(404).send(`<h1>Aranılan futbolcu dizide bulunamadı!</h1>`);
    } else { // eğer istek yapılan id değeri rakamdan farklı bir değerse burası çalışır
        console.log(`${req.params.id} şeklinde yanlış bir parametre verilmiştir.`);
        res.send(`${req.params.id} şeklinde yanlış bir parametre verilmiştir.`);
    }
});

// /player post isteği yapılırsa bu yapı çalışır.
router.post('/', (req, res) => {

    // post olarak gönderilen değerler burada kontrol edilir. 
    const validateResult = validateFunction(req.body); 

    // Eğer post edilen değerler hatalı girilmişse burası çalışır
    if (validateResult.error) {
        console.log('bilgiler yanlış girilmiştir!');
        // Hatalı değerler hangi durumdan kaynaklanıyorsa onunla ilgili hata mesajını response olarak gönderir.
        return res.send(`Bilgiler yanlış girilmiştir. Hata bilgisi aşağıda yer almaktadır.\n\n\n${validateResult.error.details[0].message}`);
    }

    // eğer hatalı bir değer girilmemişse burası çalışır. footballer.json dosyasından veriler okunur.
    let readedData = data.readWrite.fileRead();

    // post olarak gönderilen veriler aşağıdaki yapı ile newFootballer nesnesine kaydedilir.
    const newFootballer = {
        id: readedData[readedData.length - 1].id + 1,
        name: req.body.name,
        age: parseInt(req.body.age) // eğer yas değeri string girilirse interger a parse edildikten sonra age değişkenine kaydedilir.
    };

    // post edilen verinin ismi konsola yazdırılır
    console.log(`${req.body.name} isimli futbolcu diziye eklendi.`);
    readedData.push(newFootballer); // newFootballer nesnesi footballer.json dosyasına eklenmek için ilk önce diziye kaydedilir.

    data.readWrite.fileWrite(readedData); // veriler footballer.json dosyasına yazdırılır.
    res.send(readedData); // tarayıcıya footballer.json dosyasının en son hali response olarak gönderilir.
});

// /player/4 gibi bir put isteği yapılırsa bu yapı çalışır. 
router.put('/:id', (req, res) => {

    let readedData = data.readWrite.fileRead(); // footballer.json dosyasından veriler okunur

    const reqID = parseInt(req.params.id); // parametre olarak girilen id değeri default olarak string gelir. integer a parse işlemi yapılır. 
    const result = readedData.find(value => value.id === reqID); // güncellenmek istenen id değeri footballer.json dosyasında bulunuyor mu diye kontrol işlemi yapılır.

    if (!isNaN(reqID)) { // put isteği yapılan id değeri rakam ise burası çalışır
        if (result) { // eğer id olarak girilen değer footballer.json dosyasında mevcutsa burası çalışır.
            const validateResult = validateFunction(req.body); // put olarak gönderilen veriler kontrol için validateFunctionuna gönderilir.
            if (!validateResult.error) { // eğer post edilen verilerde bir hata yoksa burası çalışır
                console.log(`${result.name} futbolcusu ${req.body.name} futbolcusu ile güncellenmiştir...`);
                result.name = req.body.name // put olarak gönderilen name verisi hangi id li değerle güncellenecek ise onun name değerine kaydedilir.
                result.age = req.body.age 

                data.readWrite.fileWrite(readedData); // güncellenen veriler dosyaya kaydedilir.

                return res.send(readedData); // tarayıcıda kullanıcılar için veriler response olarak gönderilir.  
            }
            // eğer put olarak gönderilen verilerde bir hata varsa burası çalışır
            return res.send(`Bilgiler yanlış girilmiştir. Hata bilgisi aşağıda yer almaktadır.\n\n\n${validateResult.error.details[0].message}`);
        };

        console.log(`${reqID} id li futbolcu dizide bulunamamıştır!`);
        res.status(404).send(`<h1>${reqID} id li futbolcu dizide bulunamamıştır!</h1>`)

    } else {
        console.log(`${req.params.id} şeklinde yanlış bir parametre verilmiştir.`);
        res.send(`${req.params.id} şeklinde yanlış bir parametre verilmiştir.`);
    }
});

// /delete/3 şeklinde bir delete isteği yapılırsa bu yapı çalışır
router.delete('/:id', (req, res) => {

    let readedData = data.readWrite.fileRead(); // veriler dosyada okunur

    const reqID = parseInt(req.params.id);
    const result = readedData.find(value => value.id === reqID);

    if (!isNaN(reqID)) {
        if (result) {
            console.log(`${reqID} idli ${result.name} isimli futbolcu diziden siliniyor...`);
            readedData = readedData.filter(value => value.id !== reqID) // istek olarak gönderilen id footballers.json dosyasında mevcutsa bu veri silinir

            data.readWrite.fileWrite(readedData);

            return res.send(readedData);
        };

        console.log(`${reqID} id li futbolcu dizide bulunamamıştır!`);
        return res.status(404).send(`<h1>${reqID} id li futbolcu dizide bulunamamıştır!</h1>`)
    }

    console.log(`${req.params.id} şeklinde yanlış bir parametre verilmiştir.`);
    res.send(`${req.params.id} şeklinde yanlış bir parametre verilmiştir.`);
});

/* 
    app.js dosyamız ilk çalıştığında; footballer.json dosyası dizinde varsa bunu okumaya çalışır yoksa catch bloğuna
    geçer ve footballers dizisiyle yeni bir footballers.json dosyası oluştur.
*/
try {
    data.readWrite.fileRead();
} catch (err) {
    data.readWrite.fileWrite(footballers)
}

module.exports = router; // router olarak tanımladığımız rotalar app.js dosyası tarafından görülmesi için dışarıya export edilir.