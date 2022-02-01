var firstNumber = 1;
var secondNumber = 2;
console.log(firstNumber,secondNumber);

//simple way to swap
let temp = firstNumber
firstNumber = secondNumber;
secondNumber = temp;
console.log(firstNumber,secondNumber);

//  destructuring
[firstNumber,secondNumber]=[secondNumber,firstNumber];
console.log(firstNumber,secondNumber);

