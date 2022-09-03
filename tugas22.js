const mapping = () => {
  const p = "Saya ingin belajar bersama";

  p.split(" ").forEach((item, index) => {
    console.log(`Item : ${item} Index ke ${index}`);
  });
};

mapping();
