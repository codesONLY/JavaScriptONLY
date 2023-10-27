function makeCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let counter = makeCounter();

counter();
counter();
counter();

const count = counter();

console.log(count);
