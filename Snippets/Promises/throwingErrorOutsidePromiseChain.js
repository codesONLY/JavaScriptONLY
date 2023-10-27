function first() {
  throw new Error("lol"); // error wont be caught in .catch()
  return Promise.resolve(1);
}

function second(num) {
  throw new Error("lol"); // error will be caught in .catch()
  return num + 2;
}

first()
  .then((valueOne) => second(valueOne))
  .then((valueTwo) => console.log(valueTwo))
  .catch((err) => console.log(err));
