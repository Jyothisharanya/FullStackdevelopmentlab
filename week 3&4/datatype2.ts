let arr: number[] = [10, 20, 30, 20, 40, 10, 50];

console.log("Duplicate Elements are:");

for (let i = 0; i < arr.length; i++) {
    let isDuplicate: boolean = false;

    // Check if the element has already appeared
    for (let k = 0; k < i; k++) {
        if (arr[i] === arr[k]) {
            isDuplicate = true;
            break;
        }
    }

    // If already counted, skip it
    if (isDuplicate) {
        continue;
    }

    // Check for duplicates ahead
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            console.log(arr[i]);
            break;
        }
    }
}

export {};