

//***string dizi***/
// unutmayın! "let" modifiye edilir
//             "const" modidifiye edilmez.!!!!


let isimler=['aysegul','rıdvan','elif'];
console.log(isimler[1]);


// isimler[1] modifiye ediyoruz.yani eşit olduğu değeri değiştiriyoruz!
isimler[1]='tuce';
console.log(isimler[1]);





//***number dizi***/
let yaslar=[3,18,25,50];
console.log(yaslar[3]);



//***karmaşık dizi***
//genelde pek kullanılmaz
let rastgele=['can','aysegul','10','15'];
console.log(rastgele);











//şimdi her bir elemanın aralarına bir şeyler ekleyip bastıracağız
//bunu yapabilmek için join metodunu kullanıyoruz
let tireli=isimler.join('-');
console.log(tireli);


let virgullu=isimler.join(',');
console.log(virgullu);



//elemanın sırasını bulmak
let sira=isimler.indexOf('elif');
console.log(sira);


//dizi içine eleman ekleme metodu (concat)
let ekle=isimler.concat(['merve','suna']);
console.log(ekle);


// push bir diziye eleman eklemek istediğimde kullandığım bir metottur.
let elemanekle=isimler.push('leyla');
console.log(isimler);

// pop en son elemanı çıkarır!!!!!! 
isimler.pop();
console.log(isimler);