function second() {
  return new Promise((resolve, reject) => {
    // resolve/reject happens only one time
    resolve(1);
    reject("Failed");
    resolve(2);
    console.log("After resolve/reject"); // this will be printed first because aLl lines will be executed
  });
}

function first() {
  second()
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
}

first();
