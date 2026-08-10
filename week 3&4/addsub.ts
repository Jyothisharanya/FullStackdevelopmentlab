namespace MathOperations {

    export function add(a: number, b: number): void {
        console.log("Addition = " + (a + b));
    }

    export function subtract(a: number, b: number): void {
        console.log("Subtraction = " + (a - b));
    }

    export function multiply(a: number, b: number): void {
        console.log("Multiplication = " + (a * b));
    }

    export function divide(a: number, b: number): void {
        if (b != 0) {
            console.log("Division = " + (a / b));
        } else {
            console.log("Division by zero is not possible");
        }
    }
}

// Calling namespace functions
MathOperations.add(10, 5);
MathOperations.subtract(10, 5);
MathOperations.multiply(10, 5);
MathOperations.divide(10, 5);

export {};