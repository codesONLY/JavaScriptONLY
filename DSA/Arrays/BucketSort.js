const arr = [5, 3, 1, 2, 4, 7, 6];
const bucketSort = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = 5;
  arr.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  arr.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });
  arr.length = 0;
  allBuckets.forEach(function (bucket) {
    insertion(bucket);
    bucket.forEach(function (element) {
      arr.push(element);
    });
  });
  return arr;
};
const insertion = (arr) => {
  let length = arr.length;
  let i, j;
  for (i = 1; i < length; i++) {
    let temp = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};
console.log(bucketSort(arr));

// In bucket sort, we distribute the elements of the array into a number of buckets.
// Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
// The above code will sort the array in ascending order.
// Time Complexity: O(n+k)
// Space Complexity: O(n+k)
// where n is the number of elements in the array and k is the number of buckets.
// In bucket sort, n elements are distributed into k buckets. Then, the elements of each bucket are sorted using any other algorithm. Finally, the elements are gathered from the buckets.
