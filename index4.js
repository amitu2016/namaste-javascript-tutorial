//Write a program to calculate circumference, diameter and area of circle with given arrays of radius

const radius = [2, 4, 1, 5, 7];

const calculateCircumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculateDiamter = function (radius) {
    return 2 * radius;
}

const calculateArea = function (radius){
    return Math.PI * radius * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let index = 0; index < radius.length; index++) {
         output.push(logic(radius[index]))   
    }
    return output;
}

console.log(calculate(radius,calculateCircumference));
console.log(calculate(radius,calculateDiamter));
console.log(calculate(radius,calculateArea));