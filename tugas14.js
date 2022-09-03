const hasilBagi = () => {
  const bil = 37 / 4;

  console.log(bil);

  console.log(Math.round(bil));
  console.log(Math.ceil(bil));
  return Math.floor(bil);
};

console.log(hasilBagi());
