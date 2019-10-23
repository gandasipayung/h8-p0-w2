var tanggal = 31;
var bulan = 12;
var tahun = 1912;

if (tanggal < 1 || tanggal > 31){
  console.log('Masukkan tanggal dari angka 1 - 31');
}
if (tahun <= 1900 || tahun >= 2200){
  console.log('Masukkan tahun dari angka 1900 - 2200');
} else {
  switch (bulan){
  case 1: tanggal <= 31 ? console.log(`${tanggal} Januari ${tahun}`) : console.log("Bulan Januari hanya  sampai tanggal 31 !"); break;
  case 2: tanggal <= 29 ? console.log(`${tanggal} Februari ${tahun}`) : console.log("Bulan Februari hanya sampai tanggal 29 !"); break;
  case 3: tanggal <= 31 ? console.log(`${tanggal} Maret ${tahun}`) : console.log("Bulan Maret hanya sampai tanggal 31 !"); break;
  case 4: tanggal <= 30 ? console.log(`${tanggal} April ${tahun}`) : console.log("Bulan April hanya sampai tanggal 30 !"); break;
  case 5: tanggal <= 31 ? console.log(`${tanggal} Mei ${tahun}`) : console.log("Bulan Mei hanya sampai tanggal 31 !"); break;
  case 6: tanggal <= 30 ? console.log(`${tanggal} Juni ${tahun}`) : console.log("Bulan Juni hanya sampai tanggal 30 !"); break;
  case 7: tanggal <= 31 ? console.log(`${tanggal} Juli ${tahun}`) : console.log("Bulan Juli hanya sampai tanggal 31 !"); break;
  case 8: tanggal <= 31 ? console.log(`${tanggal} Agustus ${tahun}`) : console.log("Bulan Agustus sampai tanggal 31 !"); break;
  case 9: tanggal <= 30 ? console.log(`${tanggal} September ${tahun}`) : console.log("Bulan September hanya sampai tanggal 30 !"); break;
  case 10: tanggal <= 31 ? console.log(`${tanggal} Oktober ${tahun}`) : console.log("Bulan Oktober hanya sampai tanggal 31 !"); break;
  case 11: tanggal <= 30 ? console.log(`${tanggal} November ${tahun}`) : console.log("Bulan November hanya sampai tanggal 30 !"); break;
  case 12: tanggal <= 31 ? console.log(`${tanggal} Desember ${tahun}`) : console.log("Bulan Desember hanya sampai tanggal 31 !"); break;
  default: console.log("Masukkan bulan dari angka 1 - 12 !");
}
}