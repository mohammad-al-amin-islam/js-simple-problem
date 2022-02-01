function findLowestNumber(numbers){
    let lowestNumber = numbers[0];
    for(let i = 0; i < numbers.length ; i++){
        let element = numbers[i];
        if(lowestNumber>element){
            lowestNumber = element;
        }
    } 
    return lowestNumber;
}

const arrayList = [56, 24, 52, 23, 24];
const result = findLowestNumber(arrayList);
console.log(result);