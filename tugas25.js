const filterSorting = (arr) => {
    console.log(`Sebelumnya  : ${arr.join(",")}`);
  
    const asc = arr.sort();
    console.log(`Ascending   : ${asc.join(",")}`);
  
    const desc = arr.sort().reverse();
    console.log(`Descending  : ${desc.join(",")}`);

    const filt = arr.filter((num) => num > 10)
    console.log(`Filter > 10 : ${filt.join(",")}`)
  };
  
  const arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  
  filterSorting(arr);
  