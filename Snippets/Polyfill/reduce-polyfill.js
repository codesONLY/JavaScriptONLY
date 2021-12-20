// reduce polyfill

Array.prototype.customReduce = function (callbackFn, initialValue) {
   let accumulator = initialValue;

   for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
         accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
      } else {
         accumulator = this[i];
      }
   }
   return accumulator;
};
