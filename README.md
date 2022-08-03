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
![image](https://user-images.githubusercontent.com/64845818/182610565-5ab962f6-ca22-4cb8-96a4-fb10cf0a4b1b.png)

### Proje dizinine geçmek için
```
cd nodeJS-express-sunucu-olustur
```
![image](https://user-images.githubusercontent.com/64845818/182610689-f99859a8-de5a-4a32-b20c-14d9111cf98c.png)

### tüm paketleri tek seferde kurmak için
```
npm i
```
![image](https://user-images.githubusercontent.com/64845818/182610833-828bfa4c-8167-4b9f-8e68-5d5a9030c748.png)


### Konsol uygulamamızı çalıştırmak için
```
node app.js 
```
![image](https://user-images.githubusercontent.com/64845818/182610988-fc166c73-c05c-4e00-902a-7a35f5ac7ec9.png)

```
Görüldüğü gibi sunucu 3000 portunu gelebilecek herhangi bir http isteğine response (cevap) göndermek için dinliyor.
```

![image](https://user-images.githubusercontent.com/64845818/182611428-1c14a8da-b805-4478-ba7d-57a4e0be4f2f.png)


### node the term 'node' is not recognized as the name of a cmdlet hatası için
```
Bu hata, kurulumunu yaptığımız node dizini yolunun bulunamamasından kaynaklıdır. Bu hatayı düzeltmek için 
path ayarı yapılmalır. Aşağıdaki link hata çözümüne yardımcı olacaktır.
```
https://www.youtube.com/watch?v=pg4t48BPmh8

![image](https://user-images.githubusercontent.com/64845818/182600071-969bdf3d-a88f-4469-ad54-01ad1fe8edf4.png)


### localhost:3000 get isteğinde bulunmak
```
localhost:3000 şeklinde sunucuya http get isteği yapılır ve response olarak aşağıdaki cevap döner. 
```
![image](https://user-images.githubusercontent.com/64845818/182612143-19889cb8-9b57-47fc-94b0-698bfc1c4c9e.png)


### localhost:3000/player get isteğinde bulunmak
```
localhost:/3000/player http get isteği yapıldığında aşağıdaki gibi bir sonuç döner. Buradaki get isteği 
"Getting Started" bölümünde bahsedilen postman uygulamasıdır. Uygulamayı aşağıdaki linkden indirip kurabilirsiniz
```
https://www.postman.com/downloads/

![img1](https://user-images.githubusercontent.com/64845818/182615942-2bc66f33-be9e-441e-bdc2-6903e79ec779.png)

### localhost:3000/player post isteğinde bulunmak
```
Post isteğinde bulunmak için postman uygulaması kullanılmıştır. 
```
![img2](https://user-images.githubusercontent.com/64845818/182619068-f08e5d59-d0d5-4f86-9e6d-259d24a139d5.png)

```
istek sonucundan response olarak gönderilen veri aşağıdaki gibidir.
```
![img3](https://user-images.githubusercontent.com/64845818/182619546-223e07dd-43cc-4bff-9a3d-c862d3956b19.PNG)

### localhost:3000/player/3 delete isteğinde bulunmak
```
localhost:3000/player/3 url adresine delete işlemi uygulandığında parametre olarak verilen 3 değeri 
footballer.json dosyasında var mı diye kontrol edilir eğer varsa bu id ye sahip değer footballer diziden
silinir. Eğer bu id ye sahip değer bulunmuyorsa "X id li futbolcu dizide bulunamamıştır!" şeklinde
hem konsola hem de tarayıcıya uyarı mesajı gönderir.
```

```
localhost:3000/player/3 isteği sonucu 3 id li değer footballer.json dosyasında varsa 
```
![img4](https://user-images.githubusercontent.com/64845818/182622889-e979f6c4-32a0-4995-b6e3-6231877e6db8.PNG)

```
localhost:3000/player/25 isteği sonucu 25 id li değer footballer.json dosyasında bulunamadıysa
```
![img5](https://user-images.githubusercontent.com/64845818/182624216-fe10a45d-a098-413c-a82e-fa04ca6e14a7.PNG)

### localhost:3000/player/1 put isteğinde bulunmak
```
localhost:3000/player/1 url adresine put isteği yapıldığında parametre olarak verilen 1 değeri
footballer.json dosyasında var mı diye kontrol edilir eğer varsa bu id ye sahip değer üzerinde
güncelleme işlemi yapılır.
```

```
localhost:3000/player/1 isteği sonucu 1 id li değer footballer.json dosyasında varsa ve
güncellenecek değerlerde herhangi bir hata tespit edilmediyse 
```

```
localhost:3000/player/1 isteği sonucu 1 id li değer footballer.json dosyasında varsa ve
güncellenecek değerlerde herhangi bir hata tespit edildiyse
```







