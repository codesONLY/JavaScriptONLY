function minimumDifference(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while(start <= end){
        mid = end - parseInt((end-start)/2)
        if(arr[mid] === target){
            return arr[mid];
        }
        else if(arr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return Math.min(Math.abs(arr[start] - target), Math.abs(arr[end] - target))
}