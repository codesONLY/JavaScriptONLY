"use strict";
let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log("Called with", x);
    return x + this.someMethod(); // need a reference for this
  },
};

function cachingDecorator(func) {
  const cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    const res = func.call(this, x);
    cache.set(x, res);
    return res;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log(worker.slow(2)); // works
console.log(worker.slow(2)); // works, doesn't call the original (cached)
