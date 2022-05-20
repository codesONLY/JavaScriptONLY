let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why?
console.log(lazy.stomach); // apple

/*
Reason:

speedy.eat() -> couldn't find in its obj -> finds it in hamster
Now, this = speedy
In this.stomach.push() -> it searches for stomach value -> couldn't find in speedy -> found in hamster
So, this.stomach.push actually pushes food to the hamster object's stomach; which is common for both of them
*/

/*
Solution:

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

*/
