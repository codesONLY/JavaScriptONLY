const arr1 = [2, 3, 4, 5, 6, 88, 9];
const arr2 = [3, 3, 3, 5, 100];

function isSubset(arr1, arr2) {
  const arr1Set = [];
  const arr2Set = [];

  arr1.forEach((item) => {
    if (!arr1Set.includes(item)) {
      arr1Set.push(item);
    }
  });
  arr2.forEach((item) => {
    if (!arr2Set.includes(item)) {
      arr2Set.push(item);
    }
  });

  const res = arr1Set.reduce((previousValue, currentValue) => {
    return previousValue + +arr2Set.includes(currentValue);
  }, 0);
  return res === arr2Set.length;
}

console.log(isSubset(arr1, arr2));
