// fibonacci

const fibonacci = (num) => {
  if (num === 1) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
};

console.log(fibonacci(7));

// DP Approach

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
