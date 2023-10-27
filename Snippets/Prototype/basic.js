let arr = ["Soham", "Dhruvi"];

let obj = {
  name: "Soham",
  city: "Ahmedabad",
  getIntro: function () {
    console.log(this.name + "from" + this.city);
  },
};

function fun() {
  console.log("hello");
}

/* 
Learnings
arr.__proto__ === Array.prototype
arr.__proto__.__proto__ === Object.prototype
arr.__proto__.__proto__ === null

obj.__proto__ === Object.prototype
obj.__proto__proto__ === null

fun.__proto__ === Function.prototype
fun.__proto__.__proto__ === Object.prototype
fun.__proto__.__proto__.__prototype === null

Everything is object in JavaScript
*/
