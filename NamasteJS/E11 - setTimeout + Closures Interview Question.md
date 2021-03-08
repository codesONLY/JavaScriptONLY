# [Episode 11](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13): setTimeout + Closures Interview Question 🔥 

Let us understand by a simple example.

``` 
function x(){
    for(var i=0; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
    console.log("Namaste JS");
}
x();
```
Expected:
>Namaste JS
> 1 (after 1s)
> 2 (after 2s)
> 3 (after 3s)
> 4 (after 4s)
> 5 (after 5s)
> 6 (after 6s)

Output:
>Namaste JS
>6
>6
>6
>6
>6
>6

**What happens BTS?**
When the JS compiler sees the `setTimeout` it puts it in Async Queue. It sees it 5 times, and fills the queue with a total of 5 `setTimeout` funcs. 

Since `setTimeout` is async function, it is pushed into queue and the main thread of JS continues and it prints `Namaste JS` first and meanwhile the reference `i = 6` after incrementing from the `for` loop.

After the sync thread is executed and `call stack` is empty, the async queue is started being emptied.

Here, all the `setTimeout`s are closures, and thus they have reference of lexical env; and here in lexical env, `i=6` and thus `6` is printed without delay.

### How to solve this?

``` 
function x(){
    for(let i=0; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
    console.log("Namaste JS");
}
x();
```
Output:
>Namaste JS
> 1 (after 1s)
> 2 (after 2s)
> 3 (after 3s)
> 4 (after 4s)
> 5 (after 5s)
> 6 (after 6s)

**Why this works?**

We know that `let` has block scope. And thus for every block, a new value of `i` is created for each clossure.

And so, in async queue, all `setTimeout` has unique value of `i` at a different memory location.

### How to solve this without using `let`?

``` 
function x(){
    for(var i=0; i<=5; i++){
        function close(x){
            setTimeout(function (){
                console.log(i);
            }, x*1000);
        }
        close(i);
    }
    console.log("Namaste JS");
}
x();
```

**Why this works?**

We enclose the `setTimeout` inside a `close()` function. And everytime in a loop, we call `close(i)` which passes a unique value of `i` to each time `setTimeout` is called as `x` is already inside the lexical environment.

In this way the problem is tackled.











