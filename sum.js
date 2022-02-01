var numbers = [1, 2, 3, 4, 5, 6];
/* let sum = 0;
for(let i =0;i<numbers.length;i++){
    const elements = numbers[i];
    sum = sum + elements; 
}
console.log(sum); */

function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}

const result = sumOfArray([20,30,50]);
console.log(result);