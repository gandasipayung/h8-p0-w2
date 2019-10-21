var nama = 'Ganda';
var peran = 'Penyihir';

if (nama == false){
    console.log('Nama harus Diisi!');
} else if (nama && peran == false) {
    console.log(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
    console.log('"Silahkan pilih peran : Ksatria / Tabib / Penyihir"');
} else if (nama && peran == 'Ksatria'){
  console.log(`"Selamat datang di dunia Proxytia, ${nama}"`);
  console.log(`"Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
} else if (nama && peran == 'Tabib'){
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"`);
    console.log(`"Halo ${peran} ${nama}, kamu dapat menyembuhkan temanmu yang terluka."`);
} else if (nama && peran == 'Penyihir'){
    console.log(`"Selamat datang di dunia Proxytia, ${nama}"`);
    console.log(`"Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
} else {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log('"Silahkan pilih peran : Ksatria / Tabib / Penyihir"');
}