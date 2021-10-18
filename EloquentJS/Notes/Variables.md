# Javascript variables

- Variables are containers that store values.
- Javascript is dynamically typed language - run time data types i.e, a variable can be used to store any type of data - be it strings, integers, floating numbers etc.

## Naming of variables

- Variables are also known as identifiers similar to other programming languages.Variable naming has certain rules to be followed.

  - variable name can begin only with a letter or underscore ( \_ ).
  - variable names can contain letters(a-z/A-Z), numbers(0-9) and dollar sign($).
  - variable names can not contain any space or tabs.
  - variable names are case-sensitive.

  ```Javascript
      var place1 = "Hassan";
      let _phoneNumber = 9147500;
      const name$ = "Meghana";
      const NAME$ = "Deepika"; //name$ and NAME$ are different variables - case sensitive
      let country name = "INDIA" //error -can not contain spaces
  ```

## Data types

### Primitive data types

    - string

```JavaScript
    var name = "React"
```

    - number

```JavaScript
    var price = 100.89
```

    - boolean

```JavaScript
    var isVerified = true
```

    - symbol(ES6)

    - undefined

```JavaScript
   var car;    // Value is undefined, typeof car is undefined
   var car = undefined //we can assign as a value too indicating car value is empty
```

    - null - nothing

```JavaScript
   var Cartoon = {name: "Mickey",Place: "Disney"};
   var Cartoon = null // Cartoon contains nothing now
```

### Non - primitive data types

    - array

```Javascript
    let bankAccount = ["SBI", 10000.256, "may"]
```

    - object - key:value pairs mapping

```Javascript
    let bankAccount = { name: "SBI", amount: 10000.256, openedMonth: "may"}
```

## Ways to declare a variable

---

    - var (ES5)
    - let and const(ES6)

### 1. Using `var` keyword

- Note: `typeof` operator returns a string indicating the data type of the variable

- `var` keyword is used to declare variables which can be used globally.

  ```Javascript
  var coins = 1
  typeof a //returns type of the value variable 'coins' holds
  "number"

  coins = true
  typeof a
  "boolean"

  coins = []
  typeof a
  "object"

  coins = null
  typeof a
  "object"

  var coins = "Javascript" //redeclaration of same variable allowed when var keyword is used
  typeof a
  "string"

  ```

### 2. Using `let` keyword

- `let` keyword is used to declare variable in local scope of a block statement i.e, these variables can be accessed wherever they are declared only.

  ```Javascript
   let chocolates = 3;
   chocolates = 0;
   let chocolates = 10; //Syntax error for redeclaration thrown unlike var keyword usage

  ```

### 3. Using `const` keyword

- `const` keyword is used to declare variable in local scope where it can be accessed but cannot be reinitialised and redeclared

  ```Javascript
  const chocolates = 3;
  chocolates = 10; //Syntax error for re-initialisation thrown unlike var and let keyword usage

  ```

### Comparisons between `var`, `let`, `const`

---

| var                                        | let                                       | const                                          |
| ------------------------------------------ | ----------------------------------------- | ---------------------------------------------- |
| ES5                                        | ES6                                       | ES6                                            |
| redeclaration of variable allowed          | redeclaration not allowed                 | redeclaration not allowed                      |
| re-initialisation allowed                  | re-initialisation not allowed             | re-initialisation not allowed                  |
| re-assignment of value to variable allowed | re-assignment of value to variableallowed | re-assignment of value to variable not allowed |
| functional/global scope                    | lexical/block scope                       | lexical/block scope                            |
| Hoisted                                    | not hoisted                               | not hoisted                                    |

### Few typical examples on variables

1.  ```Javascript
    var a = 10
    var b = "12"
    a + b //string gets more precedence than number when + is used and concatenation occurs
    1012
    a * b // multiplication opeartor * requires two number operands. Hence here b is converted to number
    120
    ```

2.  ```Javascript
    var a = +"100" //preceding with + to strings convert them to number
    typeof a
    "number"
    ```

3.  ```Javascript
    var a = true
    var b = 100
    a + b // when + operator used, boolean value true is considered as value 1
    101
    a * b // since * operator requires two numbers, boolean value gets converted to value 1
    100
    ```

4.  ```Javascript
    var a = 100
    var c = undefined
    a + c //since arithmetic operators requires two numbers, addition fails as c is not a number
    NaN

    undefined * 2
    NaN

    undefined + null
    NaN

    undefined + true
    NaN

    undefined + "hi" //string takes precedence
    "undefinedhi"

    "hi" - undefined
    NaN

    undefined + undefined
    NaN

    undefined / undefined
    NaN

    undefined * undefined
    NaN

    null + null
    0

    null * null
    0

    null / null
    NaN

    null - undefined
    NaN
    ```
