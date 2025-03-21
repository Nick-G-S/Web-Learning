// setTimeout() = function in javascript that allows you to schedule
//                the execution of a function after an amount of time (milisecounds)
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                 setTimeout(callback, delay);
//                 clearTimeout()= can cancel a timeout before it triggers

// // ex1
// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);

// //ex2 

// setTimeout(function sayHello(){window.alert("Hello")}, 3000);

// //ex3

// setTimeout(() => window.alert("Hello"), 3000);

// //ex4 = cancel timeout

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutId);

// ----------------------- ex5 ---------------------
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}