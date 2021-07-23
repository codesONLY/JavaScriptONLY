/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(arr, target) {
    let firstPosition = -1;
    let lastPosition = -1;
    
    let start = 0;
    let end = arr.length - 1;
    let mid;
    
    while(start <= end){
        mid = end - parseInt((end - start)/2)
        if(arr[mid] === target){
            firstPosition = mid;
            end = mid - 1
        }else if (arr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    start = 0;
    end = arr.length - 1;
    
    while(start <= end){
        mid = end - parseInt((end - start)/2)
        if(arr[mid] === target){
            lastPosition = mid;
            start = mid + 1
        }else if (arr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return [firstPosition, lastPosition]
    
};