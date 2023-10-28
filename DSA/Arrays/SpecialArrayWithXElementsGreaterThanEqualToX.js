/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    for(let i=0; i<=nums.length; i++){
        let count = 0;
        for(let j=0; j<nums.length; j++){
            if(nums[j] >= i){
                count++
            }
        }
        if(count === i){
            return i
        }
    }
    return -1
    
};

// complexities for this special array problem:

// Time Complexity: O(n2)
// Space Complexity: O(1)