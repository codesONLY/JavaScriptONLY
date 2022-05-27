// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi(phrase, who) {
  alert(phrase + ", " + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

// string also works
setTimeout("alert('Hello')", 1000);

// recommended
setTimeout(() => alert("Hello"), 1000);

// wrong!
setTimeout(sayHi(), 1000);

// clear timeout
let timerId = setTimeout(() => alert("Hi"));
clearTimeout(timerId);
