Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(
        (value) => resolve(value),
        (reason) => reject(reason)
      );
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(2), 3000)
);
const promise3 = Promise.resolve(3);

Promise.myRace([Promise.reject(new Error("bar")), promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((err) => console.log("error"));

Promise.race([Promise.reject("bar"), promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((err) => console.log("error"));
