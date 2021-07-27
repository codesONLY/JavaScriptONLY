/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(arr) {
    var slow = arr[0]
    var fast = arr[0]

    do{
      slow = arr[slow]
      fast = arr[arr[fast]]
    }while(slow !== fast)

    fast = arr[0]
    while(slow != fast){
      fast = arr[fast]
      slow = arr[slow]
    }
    return fast
    
};