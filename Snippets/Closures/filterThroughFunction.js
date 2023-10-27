const inBetween = (left, right) => {
  return function (x) {
    return x >= left && x <= right;
  };
};

const inArray = (arr) => {
  return function (x) {
    return arr.includes(x);
  };
};

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
// or console.log(arr.filter((item) => inBetween(3, 6)(item)));

console.log(arr.filter(inArray([1, 2, 10])));
