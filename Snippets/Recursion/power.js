const power = (x, n) => {
  console.log(x, n);
  if (n === 1) {
    return x;
  }
  return x * power(x, n - 1);
};

console.log(power(2, 3));
