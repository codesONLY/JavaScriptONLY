function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[min_index]) {
                min_index = j;
            }
        }
        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp;
    }
    return arr
}

let arr = [4, 12, 10, 15, 2]
console.log(selectionSort(arr));

// In selection sort, we find the minimum element and place it in the beginning of the array.
// The above code will sort the array in descending order.
// Time Complexity: O(n2)
// Space Complexity: O(1)
// where n is the number of elements in the array.