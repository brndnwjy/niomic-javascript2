const finiteCheck = (arr) => {
  for (num of arr) {
    isFinite(num)
      ? console.log(`Angka ${num} NOT Infinity`)
      : console.log(`Angka ${num} is Infinity`);
  }
};

const arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

finiteCheck(arr);
