let binary = 11001;
let decimal = 0;
let power = 0;
while (binary > 0) {
    let digit = binary % 10;
    decimal = decimal + digit * Math.pow(2, power);
    power++;
    binary = Math.floor(binary / 10);
}
console.log("Decimal Number = " + decimal);
export {};
