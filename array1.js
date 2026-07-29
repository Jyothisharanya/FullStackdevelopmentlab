let str = "typescript";
let frequency = {};
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (frequency[ch]) {
        frequency[ch] = frequency[ch] + 1;
    }
    else {
        frequency[ch] = 1;
    }
}
console.log("Character Frequencies:");
for (let key in frequency) {
    console.log(key + " : " + frequency[key]);
}
export {};
