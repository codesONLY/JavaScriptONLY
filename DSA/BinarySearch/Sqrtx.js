/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let start = 1;
    let end = x;
    let mid;
    let res = 0
    
    while(start <= end){
        mid = end - parseInt((end - start)/2)
        console.log(mid)
        if(mid*mid <= x){
            res = mid;
            start = mid + 1
        }else{
            end = mid - 1;
        }
    }
    return res 
    
    
};