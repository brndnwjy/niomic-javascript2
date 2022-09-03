function regexpReplace() {
  let data = "Belajar-Satu-Tahun-Bersama-Niomic";

  for (let i = 0; i < data.length; i++) {
    if (data[i] == "-") {
      data = data.replace(/-/, " ");
    }
  }
  console.log(data);
}

regexpReplace();
