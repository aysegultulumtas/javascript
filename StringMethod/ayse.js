let adSoyad="aysegul tulumtas";

let son=adSoyad.lastIndexOf("m");
console.log(son);

//baslangic ve bitis indexi verme
let bastanSona=adSoyad.slice(0,6);
console.log(bastanSona);

//baslangic indexi ve ondan sonra kaç index gideceğini tanımlama
let bastanSonaSubstr=adSoyad.substr(0,5);
console.log(bastanSonaSubstr);

let yerDegistir=adSoyad.replace('s','w');
console.log(yerDegistir);