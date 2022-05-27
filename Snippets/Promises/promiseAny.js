Promise.myAny = function (promises) {
  let errList = [];
  let errCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          return resolve(value);
        },
        (reason) => {
          errList[index] = reason;
          errCount += 1;
          if (errCount === promises.length) {
            return reject([
              new AggregateError([errList], "All promises were rejected"),
            ]);
          }
        }
      );
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(2), 3000)
);
const promise3 = Promise.resolve(3);

Promise.myAny([
  Promise.reject("bar"),
  Promise.reject("foo"),
  Promise.reject("nice"),
  Promise.reject("wow"),
])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

Promise.any([
  Promise.reject("bar"),
  Promise.reject("foo"),
  Promise.reject("nice"),
  Promise.reject("wow"),
])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
