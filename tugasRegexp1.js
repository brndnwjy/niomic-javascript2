function regexpTest(value) {
  const check1 = /html/.test(value);
  const check2 = /css/.test(value);

  if (check1 || check2) {
    console.log(value);
  } else {
    console.log("Belajar");
  }
}

regexpTest("Belajar html");
regexpTest("Belajar javascript");
regexpTest("Belajar css");
regexpTest("Belajar php");
