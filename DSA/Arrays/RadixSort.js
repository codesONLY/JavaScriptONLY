const arr = [121, 432, 564, 23, 1, 45, 788];
const countingSort = (arr, size, place) => {
  
  let output = new Array(size + 1).fill(0);
  let max = Math.max(...arr);
  
  let freq = new Array(max + 1).fill(0);
  
  
  for (let i = 0; i < size; i++){
      const num = Math.floor(arr[i] / place) % 10;
      freq[num]++;
  }
  
  
  for (let i = 1; i < 10; i++){
      freq[i] += freq[i - 1];
  }

 
  for (let i = size - 1; i >= 0; i--) {
      const num = Math.floor(arr[i] / place) % 10;
      output[freq[num] - 1] = arr[i];
      freq[num]--;
  }
  
 
  for (let i = 0; i < size; i++){
    arr[i] = output[i];
  }
}

const radixSort = (arr, size = arr.length) => {
 
  let max = Math.max(...arr);
  
 
  for(let i = 1; parseInt(max / i) > 0; i *= 10){
    countingSort(arr, size, i);
  }
}
radixSort(arr);
console.log(arr);

// In counting sort, we count the number of elements having distinct key values (smaller than some integer k) and use arithmetic to determine the position of each key value in the output sequence.
// The above code will sort the array in ascending order.
// Time Complexity: O(n+k)
// Space Complexity: O(n+k)
// where n is the number of elements in the array and k is the range of input.
// In counting sort, k is the range of input. So, it is not suitable for sorting large integers.