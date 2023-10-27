function first(num) {
  return Promise.resolve(num); // starting the then chain by returning a promise
}

function second(num) {
  return num + 1; // no need to return promise as this function is in 'then' chain
}

first(4)
  .then((valueOne) => second(valueOne))
  .then((valueTwo) => console.log(valueTwo));
