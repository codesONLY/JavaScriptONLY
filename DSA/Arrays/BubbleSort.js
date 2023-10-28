// Bubble sort Implementation using Javascript
  
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

// In bubble sort we compare the adjacent elements and swap them if they are in wrong order.
// The above code will sort the array in ascending order.
// Time Complexity: O(n2)
// Space Complexity: O(1)
// In bubble sort, n-1 comparisons will be done in the 1st pass, n-2 in 2nd pass, n-3 in 3rd pass and so on.