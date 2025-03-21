// termary operator = a shortcut to if{} and else{} statements
//                    helps to assingn a variable based on a condition
//                    condicion ? codeIfTrue : codeIfFalse;

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";

// let student = true;
// let message = student ? "You are a student" : "You're not a student";

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

