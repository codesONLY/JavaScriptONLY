# [Episode 2](https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3): How JavaScript Code is executed? ❤️& Call Stack

Let us look at this code below.

```
var n=2;
function square(num){
    var ans = num*num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

```

When we run this code, a GLOBAL Execution context is created. It will have Memory and Code.

It is created in two phases. 

1. __First Phase(Memory Creation Phase)__: JS will allocate the memory to all variables and functions. Ex. in our code, it will reserve memory space for n.

    * When it stores a memory space for variable n, it will store it as a special value known as *undefined*. 
    So, 
    n:undefined

    * There is also a function called "square". It stores literally the entire function inside the memory store of the function square.
    So,
    square: {...}

    * Now, it will also allocate memory to square2 and square4. Since these are variables, it will be stored as undefined.
    So,
    square2:undefined
    square4:undefined



2. __Code Execution Phase__:In this phase, it allocates all the assigned values, function calls and calculations.

    * In this, the first line n=2 is executed. And so in memory, n is updated.
    So,
    n:2

    * When the execution goes to line 6, the function call invocation is encountered of *square2*.

    * When a function is invoked a brand new __Execution Context__ is created inside the exection phase.

    * In that new exection context, it will again have two phases involved. The memory is allocated to parameters and the variables viz. ans and num that are stored as undefined.
    So,
    num:undefined;
    ans:undefined;

    * In the code execution phase of new context, the value of n of invoked function passes to num. Here num is parameter and n is argument.

    * Then in next line, ans is updated to 
    ans=num*num and in this way code execution flows and replaces undefined.

    * On line number 4, we encounter *return* keyword. It states that to return the control of the code to the previous exection context and returns ans. *ans* is search and found from memory of this exection context.

    * Coming back to the main execution context of the program and then there the code execution phase is running. It encounters *square4* and again a new execution context is created. And argument passed here is 4.

    * Now the code execution phase is completed.

And now the GLOBAL EXECUTION CONTEXT is also deleted.

In this way, a typical JS program works.






