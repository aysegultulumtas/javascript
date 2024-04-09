// 3 çeşit değişken tanımlama metodumuz var
//let update edilebilir.(değiştirilebilir).const değiştirilemez!


let gun=31;
let ay=3;
let yil=1998;

console.log(gun,ay,yil);
console.log("aysegul tulumtas "+gun+"/"+ay+"/"+yil+" tarihinde doğmuştur.");

gun=29;
console.log(gun);

//let ile tanimlanmis "gun" değeri değişti.(update)


const sifirarabafiyati=800000;
sifirarabafiyati=500000;
console.log(sifirarabafiyati);

//incele--console bakıldığı zaman değerin değiştirilemediğine dair
//hata görülmektedir.const değiştirilemez.

var arabafiyati=600000;
console.log(arabafiyati);

// const'a hata aldığımız için ondan sonra gelen kod çalışmayacaktır. 
// arabafiyati değeri gözükmeyecektir.



