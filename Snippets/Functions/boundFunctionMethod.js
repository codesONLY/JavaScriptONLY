"use strict";
function f() {
  console.log(this); // null
}

let user = {
  g: f.bind(null),
};

// f();
user.g();
