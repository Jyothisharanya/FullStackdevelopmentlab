let decimal: number = 25;
let binary: string = "";

let num: number = decimal;

while (num > 0) {
    let remainder: number = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
}

console.log("Decimal Number = " + decimal);
console.log("Binary Number = " + binary);

export {}