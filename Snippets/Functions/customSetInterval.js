const mySetInterval = (callback, delay, ...args) => {
  let timerId = setTimeout(
    function tick(...args) {
      callback(...args);
      timerId = setTimeout(tick, delay, ...args);
    },
    delay,
    ...args
  );
};

function cb(x, y) {
  console.log(x, y);
}
mySetInterval(cb, 2000, 1, 2);
