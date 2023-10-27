let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!
