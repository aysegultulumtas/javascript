//**************************önemli!!!!!!!!!!!
//  tüm javascript kütüphanelerinde (angular,react,vue)
//null kontrolü yapılır!!!!!!!!!
//null ile değer toplandığı zaman sonuç verir!
//undifined(basta değer girilmemişse) çıktılar tanımsız olacaktır
//**************************** */



//ilk senaryo /*
/*let yas;
console.log(yas,yas+5,`Yas: ${yas}`);

//open live server-incele-console
//yas= herhangi bir ilk değer atanmadığı için undifined geliyor
//yas+5 NaN yani not a number (sayı+string gibi) */




//ikinci senaryo
let yas=null;   //null bir değerdir! (null=boş)
console.log(yas,yas+5,`Yas: ${yas}`);


//yas= null basar
//yas+5 = sadece 5 basar çünkü null(boş)+5 yapar
