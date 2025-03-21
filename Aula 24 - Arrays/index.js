// array - a variable like a structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits.push("Coconut"); // include the following to the end of the array
// fruits.pop; // removes the last element
// fruits.unshift // includes the following to the start of the array
// fruits.shift // removes the fist element

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length

// let index = fruits.indexOf("banana");

// console.log(numOfFruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits.sort(); // is going to sort it by alphabetical order
fruits.sort().reverse; // is going to sort it by alphabetical order in reverse

// ------------ in reverse -----------------
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// ------------ short cut to display arrays ------------
for(let fruit of fruits){
    console.log(fruit)
}