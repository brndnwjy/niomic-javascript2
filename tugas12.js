const printBuah = () => {
  const buah = ["Pisang", "Jeruk", " Apel", "Mangga"];
  console.log(buah);

  buah.pop();
  console.log(buah);

  buah.shift();
  return buah;
};

console.log(printBuah());
