var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        console.log("Addition = " + (a + b));
    }
    MathOperations.add = add;
    function subtract(a, b) {
        console.log("Subtraction = " + (a - b));
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        console.log("Multiplication = " + (a * b));
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        if (b != 0) {
            console.log("Division = " + (a / b));
        }
        else {
            console.log("Division by zero is not possible");
        }
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
// Calling namespace functions
MathOperations.add(10, 5);
MathOperations.subtract(10, 5);
MathOperations.multiply(10, 5);
MathOperations.divide(10, 5);
export {};
