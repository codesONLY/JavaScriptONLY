function heapSort(arr) {
   
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
       
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, 0, i);
    }
}


function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, n);
    }
}

function maxHeapify(arr, i, heapSize) {
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    let largest = i;

    if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }

    if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap arr[i] and arr[largest]
        maxHeapify(arr, largest, heapSize);
    }
}

const arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);

console.log("Sorted array:", arr);
