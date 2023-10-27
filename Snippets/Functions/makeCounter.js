const makeCounter = () => {
  const counter = () => {
    return counter.count++;
  };
  counter.set = (val) => {
    counter.count = val;
    return counter.count;
  };

  counter.decrease = () => {
    counter.count--;
    return counter.count;
  };

  counter.count = 0;

  return counter;
};

const counter = makeCounter();

console.log(counter());
console.log(counter.set(10));
console.log(counter.decrease());
