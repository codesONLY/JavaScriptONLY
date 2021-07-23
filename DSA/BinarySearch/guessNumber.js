/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let start = 1;
    let end = n;
    let mid;
    
    while(start <= end){
        mid = end - parseInt((end - start)/2)
        if(guess(mid) === 0){
            return mid
        }else if(guess(mid) === -1){
            end = mid - 1;
        }else{
            start = mid + 1
        }
    }
};