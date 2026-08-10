let num1: number = 12;
let num2: number = 18;

let gcd: number = 1;

// Find GCD
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}

// Find LCM
let lcm: number = (num1 * num2) / gcd;

console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);