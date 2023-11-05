/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) {
                count++;
            }
        }
        if (count === i) {
            return i;
        }
    }
    return -1;
};

// Define an additional function to find the maximum value in the array.
function findMaxValue(nums) {
    return Math.max(...nums);
}

// Export the specialArray function and the findMaxValue function.
module.exports = {
    specialArray,
    findMaxValue
};
