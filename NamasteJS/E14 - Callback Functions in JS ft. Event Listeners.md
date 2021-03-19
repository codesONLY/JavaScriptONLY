# [Episode 14](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=16): Callback Functions in JS ft. Event Listeners 🔥


### Callback Function in JS

```
setTimeout(function (){
    console.log("timer");
},5000);

function x(y){
    console.log("x");

}
x(function y(){
    console.log("y");
});
```

Output:
>x
>undefined
>Timer


**Explanation**
Here y is never logged out...ur passing y as arg. in x but never using it

Settimeout is an async function; it takes a function and executes after x miliseconds.

The JS thread continues to execute other code and the call stack is filled and emptied.

Once the call stack is empty, it checks if the async queue is filled; then it executes those functions in the queue.

Thus output is x, undefined and then timer.

JS is single threaded synchronous language.

### Important Interview Question

```
function attachEventListeners(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click", console.log("Button", ++count));
}

attachEventListeners();
```

### removeEventListeners

Event Listeners are memory-heavy. Thus we must use removeEventListeners.


