const sum = (x) => {
  let total = x;
  return function by(y) {
    if (y === undefined) {
      return total;
    } else {
      total += y;
      return by;
    }
  };
};

console.log(sum(1)(2)(5)());

// But what if we need exactly like this: sum(1)(2)(5) for the result
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

const val = sum(1)(8); // 3
alert(val); // alert calls val.toString(). We can modify this function for our use case
