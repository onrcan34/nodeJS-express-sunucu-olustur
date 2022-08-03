
const express = require('express'); // sunucu oluşturmak için eklendi
const app = express(); // express sunucuyu aktif yapmak için
const port = 3000; // bilgisayarın istekleri dinleyeceği portu belirlendi

const playerRouter = require('./router/footballerRouter'); // tüm /player istekleri bu rota üzerinden gelir
const mainPageRouter = require('./router/mainRouter'); // / index sayfası isteği bu rota üzerinden gelir

app.use(express.json()); // post, put gibi isteklerin express sin anlayacağı şekilde dönüştürmesi için kullandığımız middleware dır.

app.use('/', mainPageRouter); // eğer / isteği yapılırsa mainPageRouter rotasına gider.
app.use('/player', playerRouter); // eğer /player isteği yapılırsa playerRouter rotasına gider.

/* 
    aşağıdaki middleware ile istenmeyen bir istek yapılırsa bunu ele almak için tanımlanmıştır. Yani / ve /player dışındaki tüm
    istekler aşağıdaki middleware a gider.
*/
app.use((req, res) => {
    console.log('Hatalı istek yapılmıştır!');
    /* 
        eğer hatalı bir istek yapılmışsa 404 status kodu ile "Sayfa Bulunamadı" hatası göndeririz.
        Bu uyarıyı tarayıcı üzerinden görüntülemek için f12 tuşuna basıp konsol kısmına bakınız.
    */
    res.status(404).send("<h1>Hatalı istek yapılmıştır!</h1>"); 
})

// program çalıştığında sürekli 3000 portunu dinler ve bir istek geliyor mu diye kontrol eder.
app.listen(port, () => {
    console.log(`${port} portu dinleniyor...`);
});