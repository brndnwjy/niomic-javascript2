const minmax = () => {
  const min = Math.min(45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10);
  const max = Math.max(45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10);

  console.log(`Nilai Minimal  : ${min}`);
  return `Nilai Maksimal : ${max}`;
};

console.log(minmax());
