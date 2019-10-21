var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 4; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1997; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 1 || tanggal > 31){
  console.log("Tanggal yang anda masukkan tidal valid!");
  console.log("Mohon masukkan tanggal dari angka 1 - 31 !");
}
if (bulan < 1 || bulan > 12){
  console.log("Bulan yang anda masukkan tidal valid!");
  console.log("Mohon masukkan bulan dari angka 1 - 12 !");
}
if (tahun < 1900 || tahun > 2200){
  console.log("Mohon maaf, tahun yang anda masukkan tidak dapat diproses !");
  console.log("Mohon masukkan tahun dari angka 1900 - 2200 !")
} else{
  switch (bulan) {
    case 1: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Januari ${tahun}`) : console.log("Bulan Januari hanya dari  tanggal 1-31 ! "); break;
    case 2: tahun %4 < 1 && tanggal > 0 && tanggal <= 29 ? console.log(`Selamat ! Ini adalah tanggal Spesial yang hanya muncul di tahun kabisat ! ${tanggal} Februari ${tahun}`) : console.log("Bulan Februari hanya dari 1-28 Jika bukan tahun Kabisat! "); break;
    case 3: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Maret ${tahun}`) : console.log("Bulan Maret hanya dari  tanggal 1-31 ! "); break;
    case 4: tanggal > 0 && tanggal < 31 ? console.log(`${tanggal} April ${tahun}`) : console.log("Bulan April hanya dari  tanggal 1-30 ! "); break;
    case 5: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Mei ${tahun}`) : console.log("Bulan Mei hanya dari  tanggal 1-31 ! "); break;
    case 6: tanggal > 0 && tanggal < 31 ? console.log(`${tanggal} Juni ${tahun}`) : console.log("Bulan Juni hanya dari  tanggal 1-30 ! "); break;
    case 7: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Juli ${tahun}`) : console.log("Bulan Juli hanya dari  tanggal 1-31 ! "); break;
    case 8: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Agustus ${tahun}`) : console.log("Bulan Agustus hanya dari  tanggal 1-31 ! "); break;
    case 9: tanggal > 0 && tanggal < 31 ? console.log(`${tanggal} September ${tahun}`) : console.log("Bulan September hanya dari  tanggal 1-30 ! "); break;
    case 10: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Oktober ${tahun}`) : console.log("Bulan Oktober hanya dari  tanggal 1-31 ! "); break;
    case 11: tanggal > 0 && tanggal < 31 ? console.log(`${tanggal} November ${tahun}`) : console.log("Bulan November hanya dari  tanggal 1-30 ! "); break;
    case 12: tanggal > 0 && tanggal <= 31 ? console.log(`${tanggal} Desember ${tahun}`) : console.log("Bulan Desember hanya dari  tanggal 1-31 ! "); break;
}
}
