//callback functions

setTimeout(function(){
    console.log("hello");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
});