Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    let toBeRejected = false;

    promises.forEach((promise, index) => {
      if (toBeRejected) return;
      Promise.resolve(promise)
        .then((res) => {
          count += 1;
          results[index] = res; // maintaining the order
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
          toBeRejected = true;
        });
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(2), 3000)
);
const promise3 = 3;

Promise.myAll([Promise.reject("bar"), promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
