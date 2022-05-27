const worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  },
};

function cachingDecorator(func, hash) {
  const cache = new Map();
  return function (...args) {
    let key = hash(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let res = func.apply(this, args);
    // or let res = func.call(this, ...args)
    cache.set(key, res);
    return res;
  };
}

function hash(args) {
  // [].join.call(arguments)
  return args.join();
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // works
console.log("Again " + worker.slow(3, 5)); // same (cached)
