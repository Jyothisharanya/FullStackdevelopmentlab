export function add(a, b) {
    console.log("Addition = " + (a + b));
}
export function subtract(a, b) {
    console.log("Subtraction = " + (a - b));
}
export function multiply(a, b) {
    console.log("Multiplication = " + (a * b));
}
export function divide(a, b) {
    if (b != 0) {
        console.log("Division = " + (a / b));
    }
    else {
        console.log("Division by zero is not possible");
    }
}
