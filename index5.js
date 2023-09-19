//Map in Javascript

const arr = [2, 1, 5, 3, 6];
console.log(arr);


//Map Function

function double(x) {
    return 2 * x;
}

function triple(x) {
    return 3 * x;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(double);
const output1 = arr.map(triple);
//1st Way
const output3 = arr.map(binary);

//2nd way by writing function directly in parameters
const output31 = arr.map(function binary(x) {
    return x.toString(2);
});

//3rd Way by using anaonymous functions
const output32 = arr.map((x) => x.toString(2));

console.log(output);
console.log(output1);
console.log(output3);
console.log(output31);
console.log(output32);