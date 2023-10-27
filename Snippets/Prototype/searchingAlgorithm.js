/*
Problem statement
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1

/*
In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.
*/
