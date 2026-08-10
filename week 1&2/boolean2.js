let decimal = 25;
let binary = "";
let num = decimal;
while (num > 0) {
    let remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
}
console.log("Decimal Number = " + decimal);
console.log("Binary Number = " + binary);
export {};
