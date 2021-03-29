function indexOf(arr,target){
    for(let i=0; i<arr.length; i+=1){
      if(arr[i] === target){
        return i;
      }
    }
    return -1;
  
  }
  
  const array = [1,2,3];
  console.log(indexOf(array,0));