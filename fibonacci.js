/* var fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
   fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo); */

/* function fibonacciSeries(num) {
    var fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const result = fibonacciSeries(5);
console.log(result); */

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'plz input number';
    }
    if (num < 2) {
       return 'please enter number greater than 2';
    }
    var fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const result = fibonacciSeries(1);
console.log(result);