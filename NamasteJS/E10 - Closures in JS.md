# [Episode 10](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12): Closures in JS 🔥 

* Closure: A function bind together with its lexical environment.

Function along with its lexical scope forms a closure.

Function bundled along with the environment.

```
Example 1

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();
```

Output:
>f y(){
    console.log(a);
}
>7

### Observation

Function x() returns a `function y` which prints `variable a` on the console. Here, `a` is not in scope of y() and so the JS engine will search for `a` in its parent's lexical environment. Here, `a` is defined equal to `7`.  

Here after the line `var z = x()` the function x is over and thus it is completely removed from the execution context.

But now when we call `z()`, given that `x()` is completely gone from the context, what should it print?

It prints `7`. This means that `x()` didn't return `function y` but a closure. Since closure is a `function` + `its lexical env`, when `z()` is called, it remembers its lexical environment and thus prints `7`.

Thus, `Closure` is nothing but a function + lexical environment(it has reference of values of vars and funcs).

```
Example 2

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}

var z = x();
console.log(z);
z();
```

Output:
>f y(){
    console.log(a);
}
>100

```
Example 3
function z(){
    var b = 900;
    function x(){
        var a=7;
        function y(){
            console.log(a, b);
        }
        return y;
    }
}

var t = x();
t();
```

Output:
>7 900

Above example shows that Closure bundles the lexical environment of all the parent levels.

### Applications of Closures

- Module Design Pattern
- Currying
- Functions like `once`
- Memoize
- Maintaining state in `async` world
- Set timeout
- Iterators etc.




