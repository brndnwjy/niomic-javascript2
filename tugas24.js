const sorting = (arr) => {
  console.log(`Sebelumnya : ${arr.join(",")}`);

  const asc = arr.sort();
  console.log(`Ascending  : ${asc.join(",")}`);

  const desc = arr.sort().reverse();
  console.log(`Descending : ${desc.join(",")}`);
};

const arr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

sorting(arr);
