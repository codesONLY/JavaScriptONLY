/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* A brute-force approach. Traverse the nums array via two pointers i and j and return
 indexes stored in an array if the total matches the target*/
var twoSum = function (nums, target) {
  let targetResult = [];
  // traverse the array via two pointers
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // check if the sum of two numbers is equal to the target
      if (nums[i] + nums[j] === target) {
        targetResult.push(i);
        targetResult.push(j);
      }
    }
  }
  // return the array with indexes
  return targetResult;
};