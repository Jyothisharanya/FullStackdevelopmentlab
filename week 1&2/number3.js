let num = 145;
let originalNum = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    let fact = 1;
    // Find factorial of the digit
    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }
    sum = sum + fact;
    num = Math.floor(num / 10);
}
// Check Strong Number
if (sum === originalNum) {
    console.log(originalNum + " is a Strong Number");
}
else {
    console.log(originalNum + " is Not a Strong Number");
}
export {};
