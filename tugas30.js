const regex = (data) => {
  const reg = /[es]/g;

  const res = data.match(reg);
  console.log(res);
};

regex(
  "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"
);
