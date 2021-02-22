// returns power of a to n by Divide and Conquer
function power(a,n){
    if(n===0){
      return 1;
    }

    if(n > 0){
        if(n%2 === 0){
            return power(a, n/2)*power(a,n/2)
        }else{
            return power(a, Math.floor(n/2))*power(a,Math.floor(n/2))*a
        }
    } 
}

let ans = power(2,10)
console.log(ans)



