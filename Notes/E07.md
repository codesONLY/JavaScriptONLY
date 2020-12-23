# [Episode 7](https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8): The Scope Chain, 🔥Scope & Lexical Environment

Let us understand with the help of this code.

```
// code example 1

function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}

a();
```

Output:

> 10

```
// code example 2

function a(){
    var b=10;
    c();
    function c(){  
    }
}
console.log(b);
a();
```

Output:

> error: not defined


### __REASON__:

* The reason lies in the concept of "SCOPE" in JS. 

* Scope means: where you can access a variable or a function in the code.

* What is the scope of a variable - means where I can access the variable 'b'. 

* Is a variable inside a scope of a function or not.

* This brings us to understand the Lexical Environment.


### __LEXICAL ENVIRONMENT__

* We know that when any execution context is created, it has memory and code phases.

* Every execution context in its memory section, has access to: (1) Local variables and functions and (2) Reference to the parent's execution context

* This is called __Lexical Environment__

* Lexical Environment of any execution context = Local memory + a pointer referencing to Lexical Environment of its parent.

* Lexical literally means hierarchy or a sequence. a() is in c()'s lexical environment. And Global is in a()'s lexical environment.

---

### __CODE EXPLANATION__:

1. Let us take code example 1.

    Here,

    ```
    call_stack = [GEC, a(), c()]

    Now lets also assign the memory sections of each execution context in call_stack.

    c() = [[lexical environment pointer pointing to a()]]

    a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]

    GEC =  [a:{},[lexical_environment pointer pointing to null]]

    ```

    * Now, we encounter console.log(b) in c(). The JS Engine searches for b in local storage of c() and since it wont find, it will move to the lexical environment it is pointing to; i.e. the parent a().

    * Now the JS Engine searches again in a()'s local storage and finds b:10; so it logs that value.

    * If b wasnt found even in a(), it would have searched in GEC via the Lexical pointer. 

    * And if it is not even found in GEC, the lexical point since it points to *null*, it returns error: not found.

2. See example 2 for instance. 

    * The variable b is searched in GEC's local memory. And since it is not found, it goes to its parent lexical environment; but since its GEC, so it will be *null*. And thus, it throws error!















