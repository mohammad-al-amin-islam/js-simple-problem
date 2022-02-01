// finding the max beween two 
/* let business = 400;
let minister = 500;

if (business>minister){
    console.log('business is bigger');
}
else{
    console.log('minister is bigger');
} */

// max between three
/* let business = 400;
let minister = 500;
let army = 700;

if(business > minister && business > army){
    console.log('business is bigger');
}
else if(minister>business && minister>army){
    console.log('miniter is bigger');
}
else{
    console.log('army is bigger');
} */

// using  math function
/* let business = 400;
let minister = 500;
let army = 700;
let result = Math.max(business,minister,army);
console.log(result);
 */


// finding max between two in function
/* let business = 400;
let minister = 500;

function findMax(first,second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}

var result = findMax(business,minister);
console.log(result); */


// three input with function

let business = 4100;
let minister = 500;
let army = 700;
/* function findMax(first,second,third){
    if (first>second && first >third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }
    else{
        return third;
    }
}
let result = findMax(business,minister,army);
console.log(result); */

// find the smallest 
function findSmallest(first,second,third){
    if(first<second && first<third){
        return first;
    }
    else if (second<first && second<third){
        return second;
    }
    else{
        return third;
    }
}

let result = findSmallest(business,minister,army);
console.log('smallest is',result);