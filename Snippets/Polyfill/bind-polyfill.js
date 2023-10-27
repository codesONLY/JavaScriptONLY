// bind polyfill

Function.prototype.customBind = function (...args) {
   let context = this;
   let params = args.slice(1);

   return function (...args2) {
      context.apply(args[0], [...params, ...args2]);
   };
};
