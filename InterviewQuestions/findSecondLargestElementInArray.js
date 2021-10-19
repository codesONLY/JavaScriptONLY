/**
 * Problem statement: Find second largest element in the array. Consider the case wherein duplicates can exist
 * arr = [12, 35, 1, 10, 34, 35, 35] - Here 35 occurs 3 times, but second largest element should be 34
 */
function findSecondLargestElementInArray(arr) {
  let largest = -1,
    secondLargest = -1;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}
let arr = [12, 35, 1, 10, 34, 35, 35];
findSecondLargestElementInArray(arr);
