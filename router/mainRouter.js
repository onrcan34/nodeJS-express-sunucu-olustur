
const express = require('express');
const router = express.Router(); // bu dosyada tanımlanan istekerin main dosyamız olan app.js tarafından tanınması için eklenir.

// index sayfasına get isteği yapılırsa aşağıdaki yapı çalışır.
router.get('/', (req, res) => {
    console.log('index sayfası açılıyor...'); // konsola kullanıcı için bilgilendirme yapar.
    res.send(`<h1>Index Sayfasına Hoşgeldiniz</h1>`); // tarayıca response gönderir.
});

module.exports = router; // burada tanımlanan yapının app.js dosyamız tarafından tanınması için dışarıya export ederiz.