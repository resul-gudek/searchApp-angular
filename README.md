# searchApp-Angular // Arama motoru 

Projemin front-end tarafını Angular CLI 11 ile geliştirmekteyim.
Api den gelen verilerde arama yaparak ve verileri filtreleyerek gelen sonuçları sonuç ekranın da daha detaylı olarak göstermekteyim. Sonuç sayfasında eğer veriler belli bir sayının üzerinde gelirse pagination olarak sayfalara ayırmaktadır. Gelen sonuçları  a-z, z-a sıralama yapılabilmektedir.
## Proje detayı 
-- Mevcutta iki sayfadan oluşmaktadır.
--1. sayfa aramanın yapıldığı 2. sayfa ise sonuç sayfası olarak tasarlanmıştır.
-- Projede kullanılan Api verileri jsonplaceholder adresinden alınmıştır. Servis kullanarak Api ile haberleşmek için search service component oluşturulmuştur.
 ayrı bir component olduğundan tek bir yerde yazarak istinilen yerden kullanım sağlanmıştır.
-- Api den gelen verileri yönetmek için ve verileri tanıtmak için models componenti oluşturulup burada export edilmiştir.
-- Card ve Result componentleri ile sayfalar oluşturulmuştur.
-- Search ve filtreleme yine ayrı birer componentte tutarak yapılmıştır.

-- Arama sayfası görünümü 

![arama sayfası](https://user-images.githubusercontent.com/57369534/133849231-2af20d0e-43b7-4499-bffe-9fcc5bc0b0a4.png)

-- Arama yapılıyor ve veriler filtreleniyor.

![arama yapıldı](https://user-images.githubusercontent.com/57369534/133849459-305062b9-d0f0-43ca-ad85-e17bd388efb8.png)

-- Arama sonucu 

![sonuç sayfası](https://user-images.githubusercontent.com/57369534/133849622-30a81a20-302c-449d-9931-ecec4c255823.png)

