// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't blck the execution flow and allows the program to continue
//                (I/O operations, network request, fetching data)
//                Handle with: Callbacks, Promises, Async/Await

function func1(callback) {
    setTimeout(() => {console.log("Task 1"); callback()}, 3000);
}

function funct2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

funt1(funct2);