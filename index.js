//console log string start
console.log("Start");

//create an anonymous function with settimeout of 5 seconds
setTimeout(function () {
    console.log("Callback");
}, 5000);

//console log string end
console.log("End");

//Block the main thread for 10 seconds using while loop and date api
let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("While Expires");