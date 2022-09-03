const printBuah = () => {
  const buah = ["Pisang", "Jeruk"];
  console.log(buah);

  buah.unshift("Apel", "Mangga");
  return buah;
};

console.log(printBuah());
