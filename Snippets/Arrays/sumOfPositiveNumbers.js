let myArray = [3, -2, 5, -1, 7, -4, 9, -6];

// Function to find the sum of all positive numbers in the array
function sumOfPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

let result = sumOfPositiveNumbers(myArray);
console.log("The sum of all positive numbers in the array is: " + result);
