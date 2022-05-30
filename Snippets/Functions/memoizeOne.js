/**
 * Do not change the function name
 **/

function memoizeOne(fn, isEqual) {
  let cache = {};

  function hasher(args) {
    return args.join(",");
  }
  return function (...args) {
    const hash = hasher(args);
    if (cache[hash]) {
      return cache[hash];
    }
    cache = {};
    const res = fn.apply(null, args);
    cache[hash] = res;
    return res;
  };
}

function add(a, b) {
  console.print("called");
  return a + b;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}
const memoizeAdd = memoizeOne(add, isEqual);
console.print(memoizeAdd(2, 3));
console.print(memoizeAdd(2, 3));
console.print(memoizeAdd(3, 4));
console.print(memoizeAdd(5, 6));
