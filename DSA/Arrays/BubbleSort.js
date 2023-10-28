// Bubble sort Implementation using Javascript // new docs `
  
 function bblSort(arr){
   
 // loop through array
 for(var i = 0; i < arr.length; i++){
     
   for(var j = 0; j < ( arr.length - i -1 ); j++){
       
     if(arr[j] > arr[j+1]){
         
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 console.log(arr);
}
  
var arr = [234, 43, 55, 63,  5, 6, 235, 547];
 
// call the function
bblSort(arr);