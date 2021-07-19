/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let index_1 = -1;
    let index_2 = -1;
    for(let i=nums.length-2; i>=0; i--){
        if(nums[i] < nums[i+1]){
            index_1 = i; 
            break;
        }   
    }
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] > nums[index_1]){
            index_2 = i;
            break;
        }
    }
    // swap
    [nums[index_1], nums[index_2]] = [nums[index_2], nums[index_1]]
    
    // reverse the latter half
    let x = index_1 + 1;
    let y = nums.length - 1
    
    while (x < y){
        [nums[x], nums[y]] = [nums[y], nums[x]]
        x++;
        y--;
    } 
    
};