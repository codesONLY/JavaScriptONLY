// filter polyfill

Array.prototype.customFilter = function (callbackFn) {
   const result = [];

   for (let i = 0; i < this.length; i++) {
      if (callbackFn.call(this, this[i], i)) {
         result.push(this[i]);
      }
   }
   return result;
};
