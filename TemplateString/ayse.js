// BİLGİ: javascript frameworkleri:
//*angular , *react , *vue 




//********YÖNTEM 1
const framework1='angular';
const framework2='react';
const framework3='vue';

let sonuc='aysegul tulumtasin bildigi javascript frameworkleri : '+framework1+ ' '+framework2+' '+framework3;
console.log(sonuc);






//*******YÖNTEM 2
// `` http request- body request sıkça kullanılır
// `` işareti kullanılacağı zaman $ ve {} kullanılır.süslü parantez içine değişken ismi girilir
// + ile boşluk eklememize bu defa gerek kalmadı. `` içerisinde boşluk bıraktık

let sonuc1=`aysegul tulumtasin bildigi javascript frameworkleri : ${framework1} ${framework2} ${framework3}  `
console.log(sonuc1);



//********YÖNTEM 3
// pek kullanılmaz:)

let html=`
<h1>${framework1}<h1>
<h2>${framework2}<h2>
<h3>${framework3}<h3>

`
console.log(html);