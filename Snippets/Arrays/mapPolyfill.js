Array.prototype.myMap = myMap;

function myMap(cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
}
const arr = [1, 2, 3, 4, 5];

console.log(arr.myMap((item) => item + 2));
