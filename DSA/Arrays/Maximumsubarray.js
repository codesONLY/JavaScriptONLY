var maxSubArray = function(nums) {
  var prev = 0;
  var max = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    // Compare previous contiguous sum with current number
    prev = Math.max(prev + nums[i], nums[i]);
    // Check if the current prev is the greatest sum 
    max = Math.max(max, prev);
  }
  return max;
};


// In the above code, we are using Kadane's algorithm to find the maximum sum of contiguous subarray.
// Time Complexity: O(n)
// Space Complexity: O(1)
// where n is the number of elements in the array.
// The idea is to maintain a contiguous sum of the array and update the maximum sum obtained so far.
