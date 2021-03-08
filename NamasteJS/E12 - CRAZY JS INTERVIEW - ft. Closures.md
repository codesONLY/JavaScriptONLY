# [Episode 12](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=14): CRAZY JS INTERVIEW 🤯ft. Closures 🔥 

### Examples to Demonstrate Closures in Interviews

```
Example 1

function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()();
```

Output:
>10

**Explanation**
`outer()()` can be literally translated to:

```
var close = outer();
close();
```
Here `Closure` is the `inner` function + its `lexical env`.

```
Example 2

function outest(){
    var c = 20;
    function outer(b){
    function inner(){
        console.log(a,b,c);
    }
    let a=10;
    return inner;
    }
    return outer;
}
let a=100;
var close = (outest())("helloworld);
close();
```
Output:
>10 helloworld 20

### Data Hiding and Encapsulation

Data Hiding : Suppose if we have a variable and we want to have data privacy over it. So we can encapsulate that data so others cant access it.

```
Example 3

function counter(){
    var count = 0;
    return function incrementCounter(){
        counter++;
        console.log(count)
    }
}

var counter1 = counter();
console.log(counter1())
var counter2 = counter();
console.log(counter2())
```
Output:
>1
>1

```
Example 3

function Counter(){
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count)
    }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
```

**Explanation**
We make a constructor function that has two functions increment and decrement. So we can access them by creating a new object everytime.

### Disadvantages of Closures:

* A lot of memory is wasted and accumulated
* These variables arent garbage collected
* If not handled properly, it leads to memory leaks

### Garbage collector:

It is a type of Program in the JavaScript Engine/Browser which frees up the unutlilized memory. 

```
Example 4

function a(){
    var x=0;
    return function b(){
        console.log(x);
    }
}
```

If a closure is formed, then it cannot be freed up from the memory. Garbage collector cannot handle a lot of closures.

### Smart Memory Collections

```
Example 5

function a(){
    var x=0;
    var z=0;
    return function b(){
        console.log(x);
    }
}
```
Smart Garbage collection is done by modern engines and browsers. Here z is not used in anywhere and closure is not formed with that variable. Hence, z is garbage collected.













