const repeats = () => {
  const word = "Semangat....";

  return word.repeat(5);
};

console.log(repeats());

// ------------------------------------------------------------------------------

const triangle90 = (level) => {
  let j = 1;
  for (let i = 0; i < level; i++) {
    if (i > level / 2) {
      console.log("*".repeat(5 + 20 * i - 20 * j * 2));
      j += 1;
    } else {
      console.log("*".repeat(5 + 20 * i));
    }
  }
};

triangle90(9);
