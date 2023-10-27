// If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop

const user = {
  func1() {
    console.log("func 1");
  },
  func2() {
    console.log("func 2");
  },
  func3() {
    console.log("func 3");
  },
};

for (let key in user) {
  if (typeof user[key] == "function") {
    user[key] = user[key].bind(user);
  }
}
