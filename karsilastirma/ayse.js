let yas=29;
console.log(yas==29);


console.log(yas=="29");
//string olmasına rağmen javascript arka planda tipini otomatik olarak çeviriyor.
//bu yüzden sonuç true çıkıyor! :O


//TİPİYLE BİRLİKTE KONTROL ETMEK İÇİN (string mi? number mi?)
// === (3 tane) eşitlik kullanmalıyız!
console.log(yas===29);  //true
console.log(yas==="29"); //false




console.log(yas!=29); //true
console.log(yas!="29"); //true
//yine burada da otomatik dönüşüm yaptı!!!!

// !== ile tipini de kontrol edeceğiz
console.log(yas!==29);  //tip olarak doğru number fakat değer eşit değil(!=) dediği için false
console.log(yas!=="29");//tip olarak yanlış.eşit değil mi? evet.true döner.


