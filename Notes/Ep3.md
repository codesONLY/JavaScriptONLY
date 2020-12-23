# Episode 3: Hoisting in JavaScript(variables and functions)

```
// code example 1

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

getName();
console.log(x);

```

Outputs:

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

 Outputs:
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

Outputs:

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

Outputs:

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

Outputs:
>  Namaste JavaScript

>  undefined

>  f getName(){
      console.log("Namaste JavaScript);
  }

__REASON OF WEIRDNESS__

The answer lies in the Global Exection Context. In the memory phase, the variables will be initialized as *undefined* and functions will get the whole function code in their memory.

This is the reason why we are getting these outputs.

// code example 6

console.log(getName)

var getName = function () {
    console.log("Namaste JavaScript");
}

var getName = () => {
    console.log("Namaste JavaScript");
}

```

Outputs:

>  undefined












