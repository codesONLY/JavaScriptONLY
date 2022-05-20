Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 sec

Function.prototype.defer2 = function (ms) {
  let k = this;
  return function (...args) {
    setTimeout(() => k.apply(this, args), ms);
  };
};

// check it
function k(a, b) {
  console.log(a + b);
}

k.defer(1000)(1, 2); // shows 3 after 1 sec
