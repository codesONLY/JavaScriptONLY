function mergeArray(arr1,arr2){
    for(let i=0; i<arr2.length;i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  }
  
  console.log(mergeArray([1,2,3],[2,3,4]))