// callback = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network Requests
//            3. Interacting with databases

//           "Hey, when you're done, call this next."
/* ------------------ First Exemple -------------------
hello(wait);

function hello(callback){
    setTimeout(function(){
        console.log("Hello!");
        callback();
    }, 3000);
}

function wait(){
    console.log("Wait");
}

function leave(){
    console.log("Leave.");
}

function goodbye(){
    console.log("Goodbye!");
}
*/

/* ------------------ Secound Exemple -------------------
sum(displayConsole, 2, 1)

function sum(callback, x, y) {
    let result = x + y;
    callback = result;
}

function displayConsole() {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}
*/