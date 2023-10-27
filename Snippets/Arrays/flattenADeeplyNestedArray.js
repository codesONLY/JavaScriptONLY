function flattenArray(arr, n = Infinity) {
  let res = [];
  for (i in arr) {
    if (n !== 0 && Array.isArray(arr[i])) {
      res.push(...flattenArray(arr[i], n - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
let input = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

console.log(flattenArray(input, 2));
