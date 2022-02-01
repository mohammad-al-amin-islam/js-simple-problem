function findLargestArrayElement(numbers) {
    let largestNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (largestNum < element) {
            largestNum = element;
        }
    }
    return largestNum;
}
const ages = [45, 67, 23, 75, 30, 34];
const result = findLargestArrayElement(ages);
console.log('senior person age', result);
const result2 = findLargestArrayElement([-10, -30, -20]);
console.log(result2);

//finding the lowest number
function lowestElementOfArray(numbers) {
    let lowestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (lowestNumber > element) {
            lowestNumber = element;
        }
    }
    return lowestNumber;
}
const result3 = lowestElementOfArray(ages);
console.log('junior person age', result3);
const result4 = lowestElementOfArray([-10,-20,-5]);
console.log(result4);