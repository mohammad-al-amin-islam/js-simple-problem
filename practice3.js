function calculateAverage(numbers){
    let sumOfNumbers = 0;
    let totalNumbers = numbers.length;
    for(let i = 0;i < totalNumbers ; i++){
        sumOfNumbers = sumOfNumbers + numbers[i];
    }
    let result = sumOfNumbers / totalNumbers;
    return result;
}

const arrayList = [1,2,3,3];
let getResult = calculateAverage(arrayList);
console.log(getResult);