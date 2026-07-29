let arr: number[] = [10, 25, 45, 30, 15];

let largest: number = arr[0];
let secondLargest: number = arr[0];

// Find the largest number
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

// Find the second largest number
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest Number = " + largest);
console.log("Second Largest Number = " + secondLargest);

export {};