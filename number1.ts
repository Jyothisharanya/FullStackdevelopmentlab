let Num: number = 153;
let originalNum: number = Num;
let sum: number = 0;

while (Num > 0) {
    let digit = Num % 10;
    sum = sum + (digit * digit * digit);
    Num = Math.floor(Num / 10);
}

if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong Number");
} else {
    console.log(originalNum + " is Not an Armstrong Number");
}