
const fs = require('fs'); // dosya okuma yazma işlemlerini yapmak için fs (file system) modulu eklendi

const fileRead = () => { // dosya okuma işlemlerini yapan fonksiyon
    let stringData = fs.readFileSync('footballers.json');
    return JSON.parse(stringData); // string olarak okunan veri JSON formatını çevrilir.
}

const fileWrite = (jsonData) => { // dosya yazma işlemlerini yapan fonksiyon
    let stringData = JSON.stringify(jsonData)
    return fs.writeFileSync('footballers.json', stringData); // veirler string formatta footballer.json dosyasına kaydedilir.
}

/* 
    fileRead ve fileWrite fonksiyonları footballerRouter.js dosyası tarafından tanınması için export edilir. 
*/
module.exports.readWrite = {
    fileRead,
    fileWrite
}
