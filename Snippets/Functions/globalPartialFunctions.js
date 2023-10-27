function partial(func, ...argsBound) {
  return function (...args) {
    // (*)
    return func.call(this, ...argsBound, ...args);
  };
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

// add a partial method with fixed time
user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);

user.sayNow("Hello");
