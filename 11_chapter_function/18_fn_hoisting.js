sayhello();
function sayhello() {
    console.log("Hello");
}
// fn as expresstion not hoisted
greet();
var greet = function() {
    console.log("Hi");
}