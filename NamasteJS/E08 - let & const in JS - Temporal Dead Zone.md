# [Episode 8](https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9): let & const in JS 🔥Temporal Dead Zone

> let and const declarations are hoisted; but differently. 

```
// code example 1

console.log(b);
console.log(a);
let a = 10;
var b = 100;

```

Output:

> undefined
> Uncaught ReferenceError: cannot access 'a' before initialization

Technically, in JS if a is hoisted, then this error wasn't expected.

### __REASON__:

* The variables a and b both are initialized with undefined in the hoisting stage. But difference is, b gets the storage space of Global, while a is stored inside a seperate memory. 

* One can access 'a' only if it is assigned. Thus, it throws error.

* The 'phase' between the Hoisting Stage and till the particular variable is assigned is called *Temporal Dead Zone* of the particular variable.

* If any variable (with let declaration) is tried to be accessed in its *Temporal Dead Zone*, it throws an error.

* window.b, this.b will print the value of b. But window.a and this.a will show it undefined as we know that window and this refer to variables in Global memory. Since, a is stored in seperate space, it cannot be accessed.


```
// code example 2

const b;
b=10;
console.log(b);
```

Outputs:
> Uncaught SyntaxError: Missing initializer in const declaration

```
// code example 3

const b=1000;
b=10;
console.log(b);
```

Outputs:
> Uncaught TypeError: Assignment to constant variable

* In const declaration, the initialization and assignment of a variable is compulsory; and cannot change it later.

### __ERRORS in JS__

* Uncaught ReferenceError: x is not defined at ...

    * This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.

* Uncaught ReferenceError: cannot access 'a' before initialization

    * This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.

* Uncaught SyntaxError: Identifier 'a' has already been declared

    * This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.

        ```
        //code example 1.1
        let a=10;
        let a=100;
        ```
        ```
        //code example 1.2
        let a=10;
        var a=100;
        ```
    
        Will throw this Syntax error and no code will be run and be rejected affront. 
        'let' is a strict form of declaration and thus can be done only once.
* Uncaught SyntaxError: Missing initializer in const declaration
    * This Error signifies that we haven't initialized or assigned value to a const declaration.

* Uncaught TypeError: Assignment to constant variable
    * This Error signifies that we are reassigning to a const variable.


### Type Error:

The Errors that occur due to conflicts with the declaration type. For example re-assigning const type declaration will throw this.

### Syntax Error:

The Errors that occur due to wrong syntax that doesn't match with JS Engine syntactical rules. 

For example, if const is not initialized, it will throw syntax error as by syntax, it must initialize if it sees a const declaration.

Also; If variable that is assigned with 'let' declaration is tried to re-declared, then it throws Syntax Error.

### Reference Error

The Errors that occurs if no reference is available for access. Can occur when the variable is no where in scope or maybe it is in temporal dead zone.


### SOME GOOD PRACTICES:

* Try using const wherever possible.
* If not, use let.
* Avoid var.
* Declare all variables with let at the top to avoid errors to shrink temporal dead zone to zero.















