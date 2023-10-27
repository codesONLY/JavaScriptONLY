const x = { b: [{ a: [1, 2, 3], b: [4, 5, 6], c: [7, 8, 9] }] };
const y = { b: [{ a: [1, 2, 3], b: [4, 5, 6], c: [7, 8, 9] }] };

const z = deepCopy(x);

function deepCopy(obj) {
  let target = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] === "object") {
      target[key] = deepCopy(obj[key]);
    } else {
      target[key] = obj[key];
    }
  });
  return target;
}

console.log(z);
console.log(z === x);
