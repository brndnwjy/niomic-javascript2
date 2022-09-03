function nestedArray(value) {
  let res = [];

  for (let i = 0; i < value.length + 1; i++) {
    let temp = [];
    for (let j = 0; j < value.length; j++) {
      temp.push(value[j][i]);
    }
    res.push(temp);
  }

  console.log(res);
}

var arr = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

nestedArray(arr);
