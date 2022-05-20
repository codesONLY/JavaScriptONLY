const a = "5";
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 3000);
  console.log("Inside promise"); // 1
});

promise.then((val) => console.log("Promise", val)); // 3

setTimeout(() => console.log("Set Timeout ran"), 3000); // 4

console.log(a); // 2
