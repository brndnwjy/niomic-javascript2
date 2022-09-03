const caseShift = () => {
  const kal1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
  const kal2 =
    "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";

  console.log(kal1.toLowerCase());
  console.log(kal1.toUpperCase());
  console.log(kal2.toLowerCase());
  return kal2.toUpperCase();
};

console.log(caseShift());

// ------------------------------------------------------------------------------

const charCode = () => {
  let p =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  p = p.substr(0, 6);

  let codes = [];
  for (let i = 0; i < p.length; i++) {
    codes.push(p.charCodeAt(i));
  }

  return codes.join("-");
};

console.log(charCode());
