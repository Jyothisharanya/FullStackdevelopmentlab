let num: number = 28;
let sum: number = 0;

// Find the sum of divisors
for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum = sum + i;
    }
}

// Check Perfect Number
if (sum === num) {
    console.log(num + " is a Perfect Number");
} else {
    console.log(num + " is Not a Perfect Number");
}
export {};