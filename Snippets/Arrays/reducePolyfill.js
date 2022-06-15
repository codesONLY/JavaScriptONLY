Array.prototype.myReduce = myReduce;

function myReduce(cb, initialValue = this[0]) {
  let result = initialValue;
  this.forEach((item) => {
    result = cb(result, item);
  });
  return result;
}

const array1 = [1, 2, 3, 4];
const sumWithInitial = array1.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(sumWithInitial);
