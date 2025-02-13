

// BOOLEaN true-false değeri döndğüren bir veri tipidir.!!!!!!!!!!!!!!!!

console.log(true,false,'true','false');
// ilk true-false string değildir!!!!!!! bool veri tipidir


let email="aysegultulumtas@gmail.com";
 
//javascript'te includes (içeriyor mu?) metodu vadır
let varmi=email.includes('@');

console.log(varmi);
//@ içerdiği için true değerini döndürür

/***/


let adSoyad=['can','tuce','elif'];
let varmi2=adSoyad.includes('t');

//sadece t aratırsak false çıkar çünkü tuce basli basina bir karakter yani tek bir elemandır!!
//içinden t'yi seçemez!!
console.log(varmi2);






//***

let yas=29;
console.log(yas==29);
// == eşit mi? demek
//console'a true basılır
console.log(yas==35);
//false değeri döndürür!

console.log(yas!=35);
// != eşit değil. demek
//true döndürür

console.log(yas>25);
// > büyük mü?
//true


//STRING karsilastirma

let ad='can';
console.log(ad=='can');
// string ifadelerde karşılaştırılabilir..
//true

console.log(ad=='Can');
//false çıkar.büyük-küçük karakter duyarlılığı vardır.

console.log(ad>'Can');
// kucuk harf buyuk harften büyük kabul edilir!
//true

console.log(ad>'adnan');
// alfabede sonra gelen büyük kabul edilir
//true can>adnan (c>a)




