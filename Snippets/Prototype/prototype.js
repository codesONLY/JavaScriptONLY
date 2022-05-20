let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

let rabbit2 = new rabbit.constructor("Black Rabbit"); // another way to create a new object

// re-assigning prototype of Rabbit
Rabbit.prototype = {
  jumps: true,
};

let rabbit3 = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved

let rabbit4 = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false

// Other alternative way
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit,
};
