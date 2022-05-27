const arr = [1, 2, 2, 3];

const updatedArrWithSet = [...new Set(arr)];

const updatedArrWithFilter = arr.filter((c, index) => {
  return index !== arr.indexOf(c);
});

const updatedArrWithIncludes = [];
arr.forEach((c) => {
  if (!updatedArrWithIncludes.includes(c)) {
    updatedArrWithIncludes.push(c);
  }
});

console.log(updatedArrWithIncludes);
