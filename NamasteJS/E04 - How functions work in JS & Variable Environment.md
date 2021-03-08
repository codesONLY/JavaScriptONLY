# [Episode 4](https://www.youtube.com/watch?v=gSDncyuGw0s&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5): How functions work in JS ❤️ & Variable Environment 

Let us understand the execution of the functions in JS by the simple example.

```
// code example 

var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}

```

Outputs:

> 10

> 100

> 1

---

__EXPLANATION OF THE CODE FLOW__


1. The Global execution context is created. It is pushed into a call stack.

    call_stack = [GEC]

2. The GEC in its memory phase initializes variables with undefined and the functions with the code itself.

3. In the execution phase, when a function is called, a whole new execution context is created. So, in our case, after x=1; function a() is called.

    So call_stack = [GEC, a()]

4. Now the whole new execution context of a is initialized and the code is run. It logs the value of x; *which is initialized in a*. Remember, x here refers to the present exection stack as JS engine searches in that first. It console logs x=10.

5. Once a() is completed, it is popped from the call_stack and control goes to GEC again. 

6. Now b() is encountered and same process is repeated.

    call_stack = [GEC, b()]

7. Once b() is completed, control goes again to GEC and the program continues. It console logs x=100.

8. In the end, GEC is popped out of call_stack and the program terminates.

 



