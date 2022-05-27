let sum = new Function("a", "b", "return a + b");

alert(sum(1, 2)); // 3

let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
