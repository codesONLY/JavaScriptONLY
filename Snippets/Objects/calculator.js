class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    console.log(this.a);
    console.log(this.a + this.b);
  }

  mul() {
    console.log(this.a * this.b);
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
