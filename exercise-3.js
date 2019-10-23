var nama = 'Ganda';
var peran = 'tabib';

if (nama == false){
    console.log('Nama harus Diisi!');
} else if (peran == false) {
    console.log(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
    console.log('"Silahkan pilih peran : Ksatria / Tabib / Penyihir"');
} else if (peran == 'Ksatria'|| peran == 'KSATRIA' || peran == 'ksatria'){
  console.log(`"Selamat datang di dunia Proxytia, ${nama}"`);
  console.log(`"Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"`);
} else if (peran == 'Tabib'|| peran == 'TABIB' || peran == 'tabib'){
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"`);
    console.log(`"Halo Tabib ${nama}, kamu dapat menyembuhkan temanmu yang terluka."`);
} else if (peran == 'Penyihir' || peran == 'PENYIHIR' || peran == 'penyihir'){
    console.log(`"Selamat datang di dunia Proxytia, ${nama}"`);
    console.log(`"Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
} else {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log('"Silahkan pilih peran : Ksatria / Tabib / Penyihir"');
}