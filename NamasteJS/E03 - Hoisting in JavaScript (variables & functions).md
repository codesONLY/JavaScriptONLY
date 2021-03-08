# [Episode 3](https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4): Hoisting in JavaScript 🔥(variables & functions)

Let us understand the concept by the following examples.

```
// code example 1

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

getName();
console.log(x);

```

Output:

>  Namaste JavaScript

>  7

```
// code example 2

getName();
console.log(x);

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

```

 Output:
>  Namaste JavaScript

>  undefined

```
// code example 3

getName();
console.log(x);

function getName(){
    console.log("Namaste JavaScript");
}

```

Output:

>  Namaste JavaScript

>  Error: x is not defined

__Hoisting__ is a concept which enables us to extract values of variables and functions even before defining them.

```

// code example 4

function getName(){
    console.log("Namaste JavaScript");
}

console.log(getName)


```

Output:

> f getName(){
      console.log("Namaste JavaScript);
  }


```

// code example 5

getName();
console.log(x);
console.log(getName)

function getName(){
    console.log("Namaste JavaScript");
}

```

Output:
>  Namaste JavaScript

>  undefined

>  f getName(){
      console.log("Namaste JavaScript);
  }

```
// code example 6

console.log(getName)

var getName = function () {
    console.log("Namaste JavaScript");
}

var getName = () => {
    console.log("Namaste JavaScript");
}

```

Output:

>  undefined


---

__REASON OF WEIRDNESS__

* The answer lies in the Global Exection Context. In the memory phase, the variables will be initialized as *undefined* and functions will get the whole function code in their memory.

* This is the reason why we are getting these outputs.














