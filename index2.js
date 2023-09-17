//Callback function
function addEventListen(params) {
let count = 0;
document.getElementById("clickMe").
addEventListener("click",function demo() {
    console.log("Button Clicked ", ++count);
});   
}

addEventListen();
