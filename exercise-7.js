console.log('Soal No. 1');
var rows1 = 5;
for (a = 0 ; a < rows1 ; a ++){
  console.log('*');
}
console.log('\n');

console.log('Soal No. 2');
var rows2 = 5;
for (var a = 0 ; a < rows2 ; a ++){
  var bintang = '';
  for (var b = 0 ; b < rows2 ; b ++){
    bintang += '*';
  }
  console.log(bintang);
}
console.log('\n');

console.log('Soal No. 3');
var rows3 = 5;
for (var a = 0 ; a < rows3 ; a ++){
  var bintang = '';
  for (var b = 0 ; b <= a ; b ++){
    bintang += '*';
  }
  console.log(bintang);
}
console.log('\n');
// console.log('reverse');
// var rows3 = 100;
// for ( a = rows3 ; a > 0  ; a-- ){
//   var bintang = '';
//   for (b = a ; b > 0 ; b -- ){
//     bintang += '*'
//   }
//   console.log(bintang);
// };