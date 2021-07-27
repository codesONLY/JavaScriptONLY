class Solution {
    
    //Function to merge the arrays.
    merge(arr1, arr2, n, m) {
        function updateArr(arr){
            for(let i = 1; i < arr.length; i++){
                if(arr[i] < arr[i-1]){
                    [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
                }
            }
            return arr
        }
        
        
        for(let i=0; i < arr1.length; i++){
            if(arr1[i] > arr2[0]){
                [arr1[i], arr2[0]] = [arr2[0], arr1[i]]
                arr2 = updateArr(arr2);
            }
        }
         
    }
}