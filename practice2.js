function lowestNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else{
        return num3;
    }
}


let number1 = 50;
let number2 = 45;
let number3 = 23;

const result = lowestNumber(number1, number2, number3);
console.log(result);