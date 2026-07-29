let arr: number[] = [10, 20, 30, 40, 50];
let n: number = 2;

// Rotate the array
for (let i = 1; i <= n; i++) {
    let firstElement = arr[0];

    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }

    arr[arr.length - 1] = firstElement;
}

console.log("Array after rotation:");
console.log(arr);

export {};