function secondLargestValue(numbers) {
    let largestNum = numbers[0];
    let secondLargest = numbers[0];
    let element = numbers.length;
    for (let i = 0; i < element; i++) {
        if(largestNum < numbers[i]){
            largestNum =numbers[i];
        }
        if (largestNum != numbers[i]){
            if(secondLargest < numbers[i]){
                secondLargest = numbers[i];
            }
        }
    }
    return secondLargest;



    /* for(let i = 0;i<element;i++){
        let secondLargest = numbers[0];
        if (largestNum !=numbers[i]){
            if (secondLargest<numbers[i]){
                secondLargest = numbers[i];
            }
        }
    }
    return secondLargest; */
    
}

var arrayList =[25,27,-13,11];
const result = secondLargestValue(arrayList);
console.log(result);