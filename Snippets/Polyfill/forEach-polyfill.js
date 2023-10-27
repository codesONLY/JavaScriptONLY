// forEach polyfill

Array.prototype.customForEach = function (callbackFn) {
   for (let i = 0; i < this.length; i++) {
      callbackFn.call(this, this[i], i);
   }
};
