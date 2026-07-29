let arr: number[] = [1, 2, 3, 5];
let n: number = 5;

let totalSum: number = (n * (n + 1)) / 2;
let arraySum: number = 0;

// Find the sum of array elements
for (let i = 0; i < arr.length; i++) {
    arraySum = arraySum + arr[i];
}

// Missing number
let missingNumber: number = totalSum - arraySum;

console.log("Missing Number = " + missingNumber);

export {};