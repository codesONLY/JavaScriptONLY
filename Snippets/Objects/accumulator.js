function Accumulator(initValue) {
  this.value = initValue;
  this.read = (payload) => {
    this.value += payload;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(1);
accumulator.read(8);

console.log(accumulator.value);
