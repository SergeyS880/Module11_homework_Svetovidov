//homework#1 function output of even end odd numbers

function getTypeOddOrEvenLenght() {
    const num = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => typeof
        n === 'number');
    const isOdd = (num) => num % 2 !== 0;
    const odd = num.filter(isOdd);
    console.log(odd.length)
    console.log(num.filter(num => num % 2 == 0).length)
}
getTypeOddOrEvenLenght()


//homework#2 function output of prime numbers

function isPrime(n) {
    if(n <= 1) {
        return false;
    }
    for(i = 2; i * i <= n; i++) {
        if(n % i ===0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime())


//homework#3 function output the sum of arguments

function getSum(a, b) {
    return a + b;
}
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(3, 3, getSum))


//homework#4 function output of numbers with interval

function anyNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
         if(current == to) {
            clearInterval(timerId);
         }
         current++;
    },1000);
}
anyNumbers(5, 15);


//homework#5 arrow function

const anyNumbers = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
const result = anyNumbers(2, 2);
console.log(result)