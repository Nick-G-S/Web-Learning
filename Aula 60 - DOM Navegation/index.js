// DOM Navigation = The process of navigation through the structure
//                  of an HTML document using JavaScript

// .firtElementChild
// .lastElementChild
// .nextElementSibling
// .previusElementSibling
// .parentElement
// .children

// ------------ .firstElementChild -------------

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// ------------- ex2 -------------

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstChild;
//     firstChild.style.backgroundColor = "yellow";

// })


// ------------- .lastElementChild -------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// ------------- ex2 -------------
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";


// ------------ .nextElementSibling ------------
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// --------- .previusElementSibling ------------
// const element = document.getElementById("apple");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// -------------- .parentElement ---------------
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// ---------------- .children ------------------
// const element = document.getElementById("fruits");
// const children = element.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "yellow";
// });
