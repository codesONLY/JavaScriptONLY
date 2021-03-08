# [Episode 9](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10): BLOCK SCOPE & Shadowing in JS 🔥

### __What is Block?__

* Block is also known as *Compound Statement*. We use it to group many JS statements together. We need to group them because we can group multiple statements at a place where JS expects only one statement. 

```
//code example 1

if(true)some statement
```

But if we want to write more statements to execute after if condition; then:

```
//code example 2

if(true){
    statement 1
    statement 2
    ...
}
```

* The {} block treats all the statements as one statement.

* The if doesnt have any curly braces in syntax.


### __BLOCK SCOPE__

* What all variables and functions that can be accessed inside the block.

```

//code example 3

{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
console.log(b);
```

Outputs:

> 10

> Uncaught ReferenceError: b is not defined

* Behind the Scenes:

    * In the BLOCK SCOPE; we get b and c inside it initialized as *undefined* as a part of hoisting (in a seperate memory space)
    * While, a is stored inside a GLOBAL scope. 

* Thus we say, *let* and *const* are BLOCK SCOPED.

* Thus, we can't access them outside the Block.

### __What is SHADOWING in JS?__

```
//code example 4

var a= 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
```

Outputs:

> 10


* If one has same named variable outside the block, the variable inside the block *shadows* the outside variable.

* So, a is reassigned to 10. Since both refers to same memory space i.e GLOBAL SPACE.

```
//code example 5

let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b);
}

console.log(b);
```

Outputs:

> 20

> 100

* In the Scope, we have b in two places. The b outside of the block is in *Script* SCOPE (seperate memory space for let and const)

* The b inside the block is in *Block* scope.

* Thus, when in Block scope, 20 is printed and 100 when outside.

* This concept is called "Shadowing".

* It is also true for *const* declarations.

### __What is Illegal Shadowing?__

```
// code example 6

let a = 20;
{
    var a = 20;
}

```

Outputs:

> Uncaught SyntaxError: Identifier 'a' has already been declared

* We cannot shadow let with var. But it is valid let using a let.

* We can shadow var with let.

* All scope rules that work in function are same in arrow functions too.

* Since var is function scoped, it is not a problem with the code below.

```
// code example 6

let a = 20;
function x() {
    var a = 20;
}

```














