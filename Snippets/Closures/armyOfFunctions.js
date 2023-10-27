function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    // we can use for loop with let i to avoid the problem
    let a = i; // avoid the closure problem of referencing same variable
    let shooter = function () {
      // create a shooter function,
      console.log(a); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

army[1]();
army[9]();
