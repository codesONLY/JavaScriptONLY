Array.prototype.myFilter = myFilter;

function myFilter(cb) {
  const filteredArr = [];
  this.forEach((item) => {
    if (cb(item)) {
      filteredArr.push(item);
    }
  });
  return filteredArr;
}

const arr = [1, 2, 3, 4];
console.log(arr.myFilter((item) => item !== 2));
