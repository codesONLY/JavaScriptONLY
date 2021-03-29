function replace(arr, n, k){
    for(let i=0;i<arr.length;i++){
      if(arr[i] === n){
        arr[i] = k;
      }
    }
    return arr;
  }
  
  const arr = [1,2,3,4]
  console.log(replace(arr,4,3))