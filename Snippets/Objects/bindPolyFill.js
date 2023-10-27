Function.prototype.myBind = myBind;

function myBind(context, ...args1) {
  const newContext = this;
  return function (...args2) {
    newContext.apply(context, [...args1, ...args2]);
  };
}

let user = {
  firstName: "John",
  sayHi(area, birthdate) {
    console.log(`Hello, ${this.firstName} from ${area}, born on ${birthdate}!`);
  },
};

let sayHi = user.sayHi.myBind(user, "Ahmedabad"); // (*)
sayHi("26/06");
