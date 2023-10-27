function throttle(func, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        func.apply(this, args);
        flag = true;
      });
    }
  };
}

const f = (text) => {
  console.log(text);
};

const f1000 = throttle(f, 1000);
f1000("Hi I am 1000s throttle function");
