// finds array length

function arrayLength(arr){
    let len = 0;
    while(arr[len] !== undefined){
      len+=1;
    }
    return len;
  
  }
  
  const array = [1,2,3];
  console.log(arrayLength(array));