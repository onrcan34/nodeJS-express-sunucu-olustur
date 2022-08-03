
const joi = require('joi'); // post edilen verileri doğrulamak için joi modülünü dahil ederiz.

const validateFunction = (footballer) => { // post edilen veri burada kontrol işlemlerinden geçer

    const schema = joi.object({
        // name olarak gönderilen veri string, alfanumerik (sadece karakterler ve sayılardan oluşan), minimum 3 maximum 15 karakterden oluşmalı
        name: joi.string().alphanum().min(3).max(15), 
        // age olarak gönderilen veri öncelikli olarak number olmalı, daha sonra integer, minimum 17 maximum 45 olduğu kontrol edilir. 
        age: joi.number().integer().min(17).max(45)
    })
    return schema.validate(footballer); // eğer bir hata alınmadıysa post edilen {name: "x", age: 20} verisi return olarak gönderilir.
};

module.exports = validateFunction; // doğrulama işlemlerini yapan fonksiyon footballer.js dosyası tarafından tanınması için dışarıya export edilir.