// Map

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
    }
    return mapped;
  }


// Filter

function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
}


// Reduce

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
}