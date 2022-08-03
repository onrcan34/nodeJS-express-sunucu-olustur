# nodeJS-express-sunucu-olustur
express modülü ile sunucu oluşturmak, yapılan isteklere göre verileri dosyaya yazan ve dosyadan okuyan uygulama

# nodeJS-axios-veri-getirme
NodeJS ve npm paketlerinden axios, prompt ve chalk kullanılarak oluşturulan bir konsol uygulaması

# Getting Started - Proje Hakkında
Bu proje nodeJS kullanılarak geliştirmiştir. Projede kullanılan npm paketlerinden express ile sunucu oluşturulur. express bize http isteklerimizi (get, post, put, delete) karşılayan bir sunucu görevi görür. Proje başlatıldığında program ilk olarak proje dizininde footballer.json dosyası var mı diye kontrol eder yoksa footballers dizisindeki veriler ile footballer.json isminde dosya oluşturur. Bu dosya halihazırda varsa program footballer.json dosyası içerisindeki verileri okuyarak işlem yapar. Tarayıcının url kısmına localhost:3000 yazıldığında sunucuya http get (veri getir) isteği yapılır ve sonuc olarak "Index Sayfasına Hoşgeldiniz" şeklinde bir response gönderilir ayrıca konsolda kullanıcıyı bilgilendirmek için "index sayfası açılıyor" şeklinde bilgilendirme yapar. Tarayıcının url bölümüne localhost:3000/player yazılıdığında ise yine bir http get isteğinde bulunulur. Response olarak footballer.json dosyası içerisinde bulunan veriler response olarak görüntülenir. Diğer yandan post (veri gönder), put (veri güncelle) ve delete (veri sil) http isteklerini yapabilmek için postman isminde bir uygulamaya ihtiyaç vardır. Postman sayesinde uzun uzun kodlar yazmak yerine API lerimizi kolayca test edebiliriz.
```
NOT!!!
Bu proje ile veriler bir dosyada tutularak (yazma ve okuma işlemleri) dinamik bir program oluşturulmuştur.
```

# Prerequisites - Gereklilikler
| Gerekli Paket ve Modüller | İndirme İşlemi |
| ------ | ------ |
| node module | https://nodejs.org/en/download/ |
| all npm packages | npm install |

# Installing - Kurulum

### Projeyi terminal üzerinden indirmek için
```
git clone https://github.com/onrcan34/nodeJS-express-sunucu-olustur.git
```
![image](https://user-images.githubusercontent.com/64845818/182032559-f9ac6b24-fa2f-4496-b413-e17b1057f8ee.png)

### Proje dizinine geçmek için
```
cd nodeJS-express-sunucu-olustur
```
![image](https://user-images.githubusercontent.com/64845818/182032602-2dedee16-10dd-4c98-af3a-c398f9010011.png)

### tüm paketleri tek seferde kurmak için
```
npm i
```
![image](https://user-images.githubusercontent.com/64845818/182032695-fa1c572f-f776-4d47-b077-9328bc60fb2a.png)


### Konsol uygulamamızı çalıştırmak için
```
node app.js 
```
![image](https://user-images.githubusercontent.com/64845818/182032970-6b684a6a-b4f1-4546-bfdf-342e79c0c866.png)

### node the term 'node' is not recognized as the name of a cmdlet hatası için
```
Bu hata, kurulumunu yaptığımız node dizini yolunun bulunamamasından kaynaklıdır. Bu hatayı düzeltmek için path ayarı yapılmalır.
Aşağıdaki link hata çözümüne yardımcı olacaktır.
https://www.youtube.com/watch?v=pg4t48BPmh8
```

![image](https://user-images.githubusercontent.com/64845818/182600071-969bdf3d-a88f-4469-ad54-01ad1fe8edf4.png)


### localhost:3000 get isteğinde bulunmak
```
localhost:3000 şeklinde sunucuya http get isteği yapılır. 
```
![image](https://user-images.githubusercontent.com/64845818/182033100-8e529da6-1605-43d9-9377-464cfbc5f695.png)

```
Aşağıdaki çıktı turkey girdisinin bir sonucudur.
```
![image](https://user-images.githubusercontent.com/64845818/182033394-87f938cc-eead-4dcf-80cb-877a43ac73c3.png)


### Kullanıcıya ipucu olarak verilen ülkeler renkli şekilde terminalde görüntülenmektedir.
```
Listelenen ülkeler arasında iki veya daha fazla isimli ülke varsa sadece ilk kelimeyi yazmak yeterlidir.
```
![image](https://user-images.githubusercontent.com/64845818/182033135-9c835f19-af40-4ccd-9a45-fcfbb58e5f00.png)



