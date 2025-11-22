
let numbers = [10, 45, 3, 78, 22];
let sum = numbers.reduce((a, b) => a + b, 0);
let largest = Math.max(...numbers);
console.log("Sum:", sum);
console.log("Largest:", largest);