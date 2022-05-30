class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    console.log(this.a);
    console.log(this.a + this.b);
    return this;
  }

  mul() {
    console.log(this.a * this.b);
    return this;
  }
}

const calculator = new Calculator(1, 2);
calculator.sum();
calculator.mul();

// alternate way

function Calc(a, b) {
  this.a = a;
  this.b = b;

  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  };
}

const calc = new Calc(5, 2);
console.log(calc.sum());
console.log(calc.mul());

// approach 2: with chaining

function Calculator(initialValue) {
  this.total = initialValue;
  this.sum = function (a) {
    this.total += a;
    return this;
  };
  this.sub = function (a) {
    this.total -= a;
    return this;
  };
  this.misc = function (cb) {
    this.total = cb(this.total);
    return this;
  };
  this.val = function () {
    return this.total;
  };
}

const cal = new Calculator(2);
console.print(
  cal
    .sum(2)
    .misc((val) => val + 100)
    .val()
);

// approach 3: using functions

function cal(initialValue) {
  let total = initialValue;

  function add(a) {
    total += a;
    return cal(total);
  }

  function val() {
    return total;
  }

  return {
    add,
    val,
  };
}

console.print(cal(2).add(2).add(2).val());
