let arr = [10, 20, 10, 30, 20, 10];
let count = {};
// Count occurrences
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (count[element]) {
        count[element] = count[element] + 1;
    }
    else {
        count[element] = 1;
    }
}
console.log("Occurrences of each element:");
for (let key in count) {
    console.log(key + " : " + count[key]);
}
export {};
