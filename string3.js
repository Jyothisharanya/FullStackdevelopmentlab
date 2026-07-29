"use strict";
let num1 = 12;
let num2 = 18;
let gcd = 1;
// Find GCD
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
// Find LCM
let lcm = (num1 * num2) / gcd;
console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);
