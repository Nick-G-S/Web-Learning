// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimun = Math.min(...numbers);

console.log(numbers)

let username = "Bro Code";
let letters = [...username]

console.log(letters)

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots","celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);