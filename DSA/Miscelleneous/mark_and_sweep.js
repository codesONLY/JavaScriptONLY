let HEAP = [];

const A = {
  language: "JavaScript",
};

HEAP.push(A);

const root = () => HEAP[0];

const B = {
  language: "Rust",
};

HEAP.push(B);

A.B = B;

const C = {
  language: "Elm",
};

HEAP.push(C);

A.C = C;

// Let's remove the reference C
delete A.C;

const D = {
  language: "GoLang",
};

HEAP.push(D);

// Object "D" is reachable from "B" and is allocated the memory
B.D = D;

// "B" reference is removed from "A".
delete A.B;

// It means that "D" still has the reference to it from "B" but it's
// not reachable (because B is not reachable anymore)

// After these manipulations, the heap still contains four objects:
// [{ A }, { B }, { C }, { D }], but only the "A" object is reachable (root)

// Garbage collector (uses mark and sweep algorithm )
const gc = () => {
  // Set __mark__ bits on the reachable objects to 1
  mark();

  // Collect the garbage (objects with __mark__ bit not set to 1)
  sweep();
};

// Traverse all the reachable objects starting from the root and set the
// __mark__ bit on it to 1
const mark = () => {
  // Initially only the root is reachable
  let reachables = [root()];

  while (reachables.length) {
    // Get the next object
    let current = reachables.pop();
    // Mark the object if it is not already marked
    if (!current.__markBit__) {
      current.__markBit__ = 1;
      // add all the reachable objects from the current object
      // reachables array
      for (let i in current) {
        if (typeof current[i] === "object") {
          // Add it to the reachables
          reachables.push(current[i]);
        }
      }
    }
  }
};

// Traverse the heap and move all unmarked or unreachable objects to the free list.
const sweep = () => {
  // Update the state
  HEAP = HEAP.filter((current) => {
    // For future Garbage collection cycles, reset the __markBit__ bit to 0
    if (current.__markBit__ === 1) {
      current.__markBit__ = 0;
      return true;
    } else return false; // move it to the free list
  });
};

const main = () => {
  console.log("\nHeap state before garbage collection: ", HEAP);

  // Make a call to garbage collector
  gc();

  console.log("\nHeap state after garbage collection: ", HEAP);
};

main();

/*
Output-->

Heap state before garbage collection:  [
  { language: 'JavaScript' },
  { language: 'Rust', D: { language: 'GoLang' } },
  { language: 'Elm' },
  { language: 'GoLang' }
]

Heap state after garbage collection:  [ { language: 'JavaScript', __markBit__: 0 } ]
*/
