/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    let res = nums.length;
    while(start <= end){
        mid = end - parseInt((end - start)/2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] > target){
            res = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return res;
    
};