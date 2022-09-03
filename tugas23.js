const filterNum = () => {
  const arr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

  const res = arr.filter((val) => val > 15);

  console.log(res);
};

filterNum()