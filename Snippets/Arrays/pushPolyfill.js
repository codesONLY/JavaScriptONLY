Array.prototype.myPush = myPush;

function myPush(item) {
  this[this.length] = item;
  return this;
}
const arr = [1, 2, 3];
arr.myPush(2).push(2); // chaining possible
console.log(arr);
