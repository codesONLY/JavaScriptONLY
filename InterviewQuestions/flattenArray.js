const arr = [[1,2,3], 2,5,4,56, [4,5,[45,6,7]]];

const customFlat = function (arr, level, resArr=[]){
 if(level === 0 )  return arr;
 
 for(let item of arr){
   if(Array.isArray(item)){
     resArr.push(...item);
   }else{
     resArr.push(item);
   }
 }
 resArr = customFlat(resArr, --level);
 
 return resArr;
}

const flatArr = customFlat(arr, 5);
console.log(flatArr);

