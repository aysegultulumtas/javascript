console.log("merhaba dunya");
//tek tırnak ' veya "" farketmez.
//bunlar yine incele--console'da çıkacak

let email="aysegultulumtas@gmail.com"
console.log(email); //console da ekrana yazdırma


//string ifadeleri birleştirme
let ad="aysegul";
let soyad= "tulumtas";
let adiSoyadi=ad + " " +soyad;
console.log(adiSoyadi);


//Karakterleri Çekme
console.log(adiSoyadi[0]);
//array'de ilk karakter=0 ile başlar



//Kaç karakter?
console.log(adiSoyadi.length);



//Methodlar(fonksiyonlar)
//to uppercase ve to lowercase ---orijinal halini değiştirmez
console.log(adiSoyadi.toLocaleUpperCase());

//seçtiğimiz karakterin hangi indexte bulunduğu
let index=adiSoyadi.indexOf("g");
console.log("g nin bulundugu index:"+index);