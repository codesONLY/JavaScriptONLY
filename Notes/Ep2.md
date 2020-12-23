# Episode 2: How JavaScript code is executed?!

Let us look at this code.

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

* First Phase(Memory Creation Phase): JS will allocate the memory to all variables and functions. Ex. in our code, it will reserve memory space for n.


