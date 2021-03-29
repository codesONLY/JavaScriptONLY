// Composing functions
const increment = (n) => n + 1;
const square = (n) => n * n;
const cube = (n) => n*n*n

// Compose Util Function
function compose(...args){
    return (num) => args.reduce((acc, cur) => cur(acc), num);
}

// Main
const incrementThenSquareThenCube = compose(increment, square, cube);
console.log(incrementThenSquareThenCube(5));