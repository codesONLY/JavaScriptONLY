// promise polyfill

Promise.customAll = function (promiseArray) {
   return new Promise((resolve, reject) => {
      let completed = 0;
      const promiseResults = [];

      promiseArray.forEach((value, index) => {
         Promise.resolve(value)
            .then((result) => {
               completed++;
               promiseResults[index] = result;

               if (completed === promiseArray.length) {
                  resolve(promiseResults);
               }
            })
            .catch((err) => reject(err));
      });
   });
};
