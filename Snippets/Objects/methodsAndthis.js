let user = {
  name: "Soham",
  age: 5,
  sayHi: function () {
    console.log("Hi " + this.name);
  },
};

let user2 = {
  name: "Ashutosh",
  age: 15,
};

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user3 = makeUser();

console.log(user3.ref); // undefined in node / Error in browser

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user4 = makeUser2();

console.log(user4.ref().name); // John
