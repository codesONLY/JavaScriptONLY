/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    function binarySearch(arr, start, end, target){
        let mid;
        while(start <= end){
            mid = end - parseInt((end - start)/2)
            if(arr[mid] === target){
                return mid;
            }else if(arr[mid] < target){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }
        return -1
    }
    function findMin(arr){
        let start = 0;
        let end = arr.length-1
        let N = arr.length;
        let res = -1;
        
        while(start <= end){
            if(arr[start] <= arr[end]){
                 return start;
            }
            mid = end - parseInt((end-start)/2)
            if(arr[mid] <= arr[(mid+1) % N] && arr[mid] <= arr[(mid+ N -1)%N]) {
               res = mid;
               break;
            } 
            if(arr[mid] >= arr[start]){
                start = mid + 1
            } else if (arr[mid] <= arr[end]){
                end = mid - 1
            }
        }
        return res
    }
    
    let minimumIndex = findMin(nums);
    
    
    let res1 = binarySearch(nums, minimumIndex, nums.length, target);
    let res2 = binarySearch(nums, 0, minimumIndex - 1, target);
    
    if(res1 !== -1){
        return res1;
    }
    return res2
};