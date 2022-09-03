function balikKata(kata) {
  let hasil = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    hasil += kata[i];
  }
  return hasil;
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
