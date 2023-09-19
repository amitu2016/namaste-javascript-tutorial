const users = [
    {firstName: "Amit", lastName: "Upadhyay", age: 29},
    {firstName: "John", lastName: "Doe", age: 22},
    {firstName: "Nidhi", lastName: "Gupta", age: 26},
    {firstName: "Narendra", lastName: "Modi", age: 45},
    {firstName: "Elon", lastName: "Musk", age: 29}
]

//Find List of Full Names

const fullNames = users.map(x => x.firstName + " " + x.lastName);

console.log(fullNames);

// List of ages with count

const output = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);

//Find First Name of All People whose age is 29

//Using Filter and Map
const filteredOutput = users.filter((x) => x.age === 29).map((x) => x.firstName);

console.log(filteredOutput);

//Using Reduce
const reduceOutput = users.reduce(function(acc, curr){
    if(curr.age === 29){
        acc.push(curr.firstName)
    }
    return acc;
}, []);

console.log(reduceOutput);