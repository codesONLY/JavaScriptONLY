let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

const total = sum(1)(2)(3)();
console.log(total);
