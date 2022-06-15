Array.prototype.myAt = myAt;

function myAt(index) {
  if (index >= 0) {
    return this[index];
  }
  return this[this.length - -index];
}

console.log([1, 2, 3].myAt(-4));
