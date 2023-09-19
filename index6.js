//Reduce function in Javascript

const arr = [5, 1, 3, 2, 6, 7, 4];

//Filter odd numbers from array

function odd(x) {
    return x % 2;
}

//Filter even number

function even(x) {
    return x % 2 === 0;
}

//Numbers greater than 4

function greaterThan4(x) {
    return x > 4;
}

const outputOdd = arr.filter(odd);

const outputEven = arr.filter(even);

const outputGreaterThan4 = arr.filter(greaterThan4);

console.log(outputOdd);
console.log(outputEven);
console.log(outputGreaterThan4);