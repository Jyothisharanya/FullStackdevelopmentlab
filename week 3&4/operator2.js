let arr = [1, 2, 3, 5];
let n = 5;
let totalSum = (n * (n + 1)) / 2;
let arraySum = 0;
// Find the sum of array elements
for (let i = 0; i < arr.length; i++) {
    arraySum = arraySum + arr[i];
}
// Missing number
let missingNumber = totalSum - arraySum;
console.log("Missing Number = " + missingNumber);
export {};
