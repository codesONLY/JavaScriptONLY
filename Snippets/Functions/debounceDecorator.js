function debounce(func, delay) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      // func.apply(this, args)
    }, delay);
  };
}

let f = debounce(console.log, 2000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
