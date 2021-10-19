/**
 * Convert given array to string
 */

const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true since numbers is an array
console.log(numbers.join(",")); // 1,2,3,4,5
console.log(typeof numbers.join(",")); // string

const names = ["Javascript", "Python", "PHP"];
console.log(names.join(",")); // 'Javascript', 'Python', 'PHP'
