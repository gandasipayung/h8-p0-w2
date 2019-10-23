// Soal No. 1
console.log('Soal No. 1, Looping dengan While')
console.log('LOOPING PERTAMA');
var nomor = 0;
while (nomor < 20){
  nomor += 2;
  console.log(nomor + '- I love coding');
}
console.log('LOOPING KEDUA ');
while (nomor >= 2 ){
  console.log(nomor + '- I will become fullstack developer');
  nomor -= 2 ;
}

// Soal No. 2  
console.log('Soal No. 2 Looping dengan For');
console.log('LOOPING PERTAMA');
for(nomor = 1 ; nomor <= 20 ; nomor++){
  console.log(`${nomor} - I love coding`);
}

console.log('LOOPING KEDUA');
for(nomor = 20; nomor > 0 ; nomor --){
  console.log(`${nomor} - I love coding`);
}

// Soal No. 3
console.log('Soal No. 3 Looping Angka Ganjil dan Genap penambahan 1');
var counter = 1;
while (counter <= 100 ){
  if (counter % 2 < 1){
    console.log(counter + '- GENAP');
    counter++;
  
  } else {
    console.log(counter + '- GANJIL');
    counter++;
  }
}
console.log('Soal No. 3 Looping Kelipatan 3 pertambahan 2');
var counter = 1;
while (counter <= 100 ){
  if (counter % 3 < 1){
    console.log(counter + ' Kelipatan 3');
    counter += 2;
  } else {
    counter += 2 ;
  } 
}
console.log('Soal No. 3 Looping Kelipatan 6 pertambahan 5');
var counter = 1;
while (counter <= 100 ){
  if (counter % 6 < 1){
    console.log(counter + ' Kelipatan 6');
    counter += 5;
  } else {
    counter += 5;
  }
}
console.log('Soal No. 3 Looping Kelipatan 10 pertambahan 9');
var counter = 1;
while (counter <= 100 ){
  if (counter % 10 < 1){
    console.log(counter + ' Kelipatan 10');
    counter += 9;
  } else {
    counter += 9;
  }
}
