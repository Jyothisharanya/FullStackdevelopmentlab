let str: string = "programming";
let result: string = "";

for (let i = 0; i < str.length; i++) {
    let ch: string = str[i];

    if (result.indexOf(ch) === -1) {
        result = result + ch;
    }
}

console.log("Original String: " + str);
console.log("String after removing duplicates: " + result);

export {};