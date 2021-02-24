# Higher Order Functions

>There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.

## Abstraction

Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

## Higher Order Functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

Another Example...

```
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

```

## 1. For Each Loop

There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

```
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```

## 2. Filter

Filter function filters out the elements that don't pass the TEST function passed in it.

It returns a new array that has filtered values.

Suppose we have some SCRIPT data, then:

```
SCRIPT.filter(s => s.direction == "ttb")
```

## 3. Map

Map function is used for mapping each value of the passed iterator object to a particular another value based on the `transform` method passed.

```
SCRIPT.map(s=> s.name);
```

### 4. Reduce

The higher order operation that computes single vaue from available data, called Reduce operation (or Fold). 

It builds a value by repeatedly taking a single element from the array and combining it with the current value. 

Parameters to reduce are: Array, Combining function and a Start value.

```
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10
```

```
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}

```

## Composabiity



```
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204

```






