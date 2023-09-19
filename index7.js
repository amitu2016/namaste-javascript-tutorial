//Reduce Function

const arr = [5, 1, 3, 2, 6, 7, 4];

//Function to find sum of array elements

const outputSum = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log(outputSum);

//Function to find greatest number

const outputGreatest = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0);

console.log(outputGreatest);