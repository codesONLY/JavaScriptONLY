// Define the input array
const arr = [5, 3, 1, 2, 4, 7, 6];

// Define the bucketSort function
const bucketSort = (arr) => {
  // Check if the input array is empty
  if (arr.length === 0) {
    return arr; // Return the empty array
  }

  // Initialize variables for minValue, maxValue, and bucket size
  let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = 5;

  // Find the minimum and maximum values in the input array
  arr.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Calculate the number of buckets needed based on the range of values
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

  // Create an array to hold all the buckets
  let allBuckets = new Array(bucketCount);

  // Initialize each bucket as an empty array
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Distribute values from the input array into the appropriate buckets
  arr.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });

  // Clear the input array to prepare for sorting
  arr.length = 0;

  // Sort each bucket using insertion sort and merge them back into the input array
  allBuckets.forEach(function (bucket) {
    insertion(bucket);
    bucket.forEach(function (element) {
      arr.push(element);
    });
  });

  // Return the sorted array
  return arr;
};

// Define the insertion sort function
const insertion = (arr) => {
  let length = arr.length;
  let i, j;

  // Iterate through the elements in the bucket and perform insertion sort
  for (i = 1; i < length; i++) {
    let temp = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }

  return arr; // Return the sorted bucket
};

// Call the bucketSort function and print the sorted array
console.log(bucketSort(arr));
