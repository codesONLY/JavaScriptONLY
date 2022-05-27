const delay = (data, ms) => {
  setTimeout(() => console.log("computing", data), ms);
};
let slow = async (x) => {
  await delay(x, 3000);
  return x;
};

const cachingDecorator = (func) => {
  const cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    const res = func(x);
    cache.set(x, res);
    return res;
  };
};

slow = cachingDecorator(slow);

slow(4).then(slow(5)).then(slow(4));

console.log(await slow(5));
console.log(await slow(4));
