

---

# [Episode 10](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12): Closures in JavaScript 🔥

In JavaScript, closures are a powerful concept that combines a function with its lexical environment, enabling the function to retain access to variables from its parent scope even after the parent function has finished executing.

## Understanding Closures

Let's delve into a few examples to understand how closures work:

**Example 1:**
```js
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z); // Output: f y(){ console.log(a); }
z(); // Output: 7
```

In this example, the inner function `y` maintains a reference to the variable `a` from its lexical scope. Even though the outer function `x` has completed execution, `z` still prints `7` when invoked, demonstrating how the closure retains the environment.

**Example 2:**
```js
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z); // Output: f y(){ console.log(a); }
z(); // Output: 100
```

Here, even after the value of `a` is changed to `100`, the closure retains the updated value when invoked through `z()`.

**Example 3:**
```js
function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        return y;
    }
}

var t = x();
t(); // Output: 7 900
```

This example highlights how closures encapsulate the lexical environments of all parent levels.

## Applications of Closures

Closures find application in various programming scenarios:

- **Module Design Pattern**: Closures help create private variables and methods in JavaScript, facilitating the module design pattern.
- **Currying**: Closures enable the creation of curried functions, allowing the transformation of functions with multiple arguments into a sequence of functions with a single argument.
- **Memoization**: Closures can be used to implement memoization, a technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.
- **Asynchronous State Management**: Closures aid in maintaining state in asynchronous programming, enabling functions to access their lexical environment even after the parent function has completed execution.
- **Timeouts and Iterators**: Closures are instrumental in scenarios such as managing timeouts and creating custom iterators.

Understanding closures is crucial for harnessing the full power of JavaScript and developing efficient and robust applications.

---
