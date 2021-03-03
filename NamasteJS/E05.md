# [Episode 5](https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6): SHORTEST JS Program 🔥window & this keyword

__FUNDAMENTALS__

* Shortest JS program is nothing but an Empty js file.

* But there is a lot of things done by JS Engine when it is executed.

* It creates GEC and also it creates "window" and *this* variable.

* Window is a big global object that has a lot of functions and variables.

* We can access these functions anywhere inside our JS program, and this is provided by our JS Engine itself.

* *this* variable points to *window*.

* Whenever a GEC is created, a *this* is created along with it. Here the Global object provided by the browser engine is *window*, so *this* points to *window*.

---

__GLOBAL SPACE__ 

* It is anything that is not inside any function. In global space variables and functions can be present.

* Whenever in a JS file, we create a global variable or a function, it gets attached with the *window* object and can be accessed through it.

```
// code example 1
a=10;
console.log(window.a);
console.log(a);
console.log(this.a);
```

Outputs:
> 10

> 10

> 10





