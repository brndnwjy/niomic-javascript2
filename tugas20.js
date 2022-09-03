const search = () => {
  const p =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";

  console.log(p.match("are"));
  console.log(p.match(/words/));
};

search();
