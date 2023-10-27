// Rest

function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1, 2, 3));

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// arguments array

function showName2() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName2("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName2("Ilya");

// BEWARE: Arrow Functions dont have "arguments"

function f() {
  // If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

  let showArg = () => console.log(arguments[0]);
  showArg();
}

f(1); // 1

// Spread

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

let str = "Hello";

// Array.from converts an iterable and array-like object into an array
console.log(Array.from(str)); // H,e,l,l,o

// Array-like is an object that index and length property

let arrLike = { 0: "foo", 5: "bar", length: 6 };
console.log(Array.from(arrLike));

console.log(Array.from([1, 2, 3], (x) => x + x));
