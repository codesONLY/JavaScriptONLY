Array.prototype.myUnshift = myUnshift;

function myUnshift(item) {
  let prevItem = item;
  const originalLength = this.length;
  for (let i = 0; i <= originalLength; i++) {
    let temp = this[i];
    this[i] = prevItem;
    prevItem = temp;
  }
  return this;
}

const arr = [1, 2, 3, 4];
arr
  .myUnshift(2)
  .myUnshift(100)
  .myUnshift(() => console.log("WOW"));
console.log(arr);
