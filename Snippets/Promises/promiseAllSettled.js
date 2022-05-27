Promise.myAllSettled = function (promises) {
  let results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          count += 1;
          results[index] = value;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          count += 1;
          results[index] = "Error: " + err;
          if (count === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(2), 3000)
);
const promise3 = 3;

Promise.myAllSettled([Promise.reject("bar"), promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
