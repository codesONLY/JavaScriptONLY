function heapSort(arr) {
    // Build heap (rearrange array)
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
        heapify(arr, arr.length, i);

    // One by one extract an element from heap
    for (let i = arr.length - 1; i > 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

Array = [12, 11, 13, 5, 6, 7];

console.log(heapSort(Array));
