const arr = [121, 432, 564, 23, 1, 45, 788];
const countingSort = (arr, size, place) => {
  
  let output = new Array(size + 1).fill(0);
  let max = Math.max(...arr);
  
  let freq = new Array(max + 1).fill(0);
  
  // this is one of my updation
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