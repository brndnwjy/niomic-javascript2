const panjangAC = () => {
  const AB = 8;
  console.log(`Nilai AB : ${AB}`);
  const BC = 6;
  console.log(`Nilai BC : ${BC}`);

  const AC = Math.sqrt(Math.pow(AB, 2) + Math.pow(BC, 2));
  return `panjang sisi AC pada segitiga siku-siku tersebut adalah : ${AC} cm`;
};

console.log(panjangAC());
