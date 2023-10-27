let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}

codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

console.log(codes);

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
