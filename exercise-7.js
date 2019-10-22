console.log('Soal No. 1');
for (var baris = 5 ; baris > 0 ; baris --) {
  console.log ('*')
}
// 
console.log(' ');
// 
console.log('Soal No. 2');
for (var baris = 5; baris > 0 ; baris--){
  bintang='';
  for (var kolom = 0 ; kolom < 5 ; kolom ++){
   bintang += '*';
  }
  console.log(bintang);
}
// 
console.log(' ');
// 
console.log('Soal No. 3');
for (var baris = 0; baris < 5 ; baris++){
  bintang='';
  for (var kolom = 0 ; kolom <= baris ; kolom ++){
   bintang += '*';
  }
  console.log(bintang);
}
// 
console.log(' ');
// 
console.log('Reverse dari No. 3');
for (var baris = 0 ; baris < 5 ; baris ++){
  bintang='';
  for (var kolom = 5  ; kolom > baris ; kolom --){
    bintang += '*';
  }
  console.log(bintang);
}
