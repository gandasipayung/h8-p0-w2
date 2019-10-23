console.log('Soal No. 1, Looping dengan While')
console.log('LOOPING PERTAMA');
var a = 0
while (a < 20){
  a += 2;
  console.log(a + ' - I love coding');
};
console.log('LOOPING PERTAMA');
var a = 20;
while (a > 0 ){
  console.log(a + ' - I will become fullstack developer');
  a -= 2;
};
console.log(); // jarak

console.log('Soal No. 2 Looping dengan For');
console.log('LOOPING PERTAMA');
var total = 20;
for (a = 1 ; a <= total ; a++ ){
  console.log(a + ' - I love coding');
};
console.log(); // jarak

console.log('LOOPING KEDUA');
var total = 20;
for (a = total ; a > 0 ; a--){
  console.log(a + ' - I will become fullstack developer');
};

console.log(); // jarak

console.log('Soal No. 3 Looping Angka Ganjil dan Genap penambahan 1');
var total = 100;
for (counter = 1 ; counter <= total ; counter++){
  if (counter % 2 == 0){
    console.log(counter + ' GENAP');
  } else{
    console.log(counter + ' GANJIL');
  }
};

console.log(); // jarak

console.log('Soal No. 3 Looping Kelipatan 3 pertambahan 2');
var total = 100;
for (counter = 1 ; counter <= total ; counter += 2){
  if (counter % 3 == 0){
    console.log(counter + ' kelipatan 3');
  } else {
    // console.log('');
  }
};

console.log(); // jarak

console.log('Soal No. 3 Looping Kelipatan 6 pertambahan 5');
var total = 100;
for (counter = 1 ; counter <= total ; counter += 5){
  if (counter % 6 == 0){
    console.log(counter + ' kelipatan 6');
  } else {
    // console.log('');
  }
};

console.log(); // jarak

console.log('Soal No. 3 Looping Kelipatan 10 pertambahan 9');
var counter = 1;
var total = 100;
for (counter = 1 ; counter <= total ; counter += 9){
  if (counter % 10 == 0){
    console.log(counter + ' kelipatan 10');
  } else {
    // console.log('');
  }
};
