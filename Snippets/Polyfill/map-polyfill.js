// map polyfill

Array.prototype.customMap = function (callbackFn) {
   const result = [];

   for (let i = 0; i < this.length; i++) {
      result.push(callbackFn.call(this, this[i], i));
   }
   return result;
};
