// element selector = Methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    from the DOM (Document Object Model)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST


// ----------------- GET ELEMENT BY ID --------------------------
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// ----------------- GET ELEMENT BY CLASS --------------------------
// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "yellow"

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }
// console.log(fruits);

// // CAN USE FOREACH() METHOD UNLESS YOU TYPECAST

// Array.from(fruits).forEach(fruit => {fruit.style.backgroundColor = "yellow";
// });

// ----------------- GET ELEMENT BY TAG NAME --------------------------

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li")

// h4Elements[0].style.backgroundColor("yellow");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// })

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// })

// ----------------- QUERY SELECTOR --------------------------

// const element = document.querySelector(".fruits");
// const element2 = document.querySelector("h4");
// const element3 = document.querySelector("li");
// const element4 = document.querySelector("ul");

// element.style.backgroundColor = "yellow"

// console.log(element);

// ----------------- QUERY SELECTOR ALL --------------------------
//NODELIST ARE STATIC (DONT UPDATE AUTOMATICALLY)

const foods = document.querySelectorAll("li");

foods.forEach(food => {
     food.style.backgroundColor = "yellow";
 })

foods[0].style.backgroundColor = "yellow";

console.log(foods)

