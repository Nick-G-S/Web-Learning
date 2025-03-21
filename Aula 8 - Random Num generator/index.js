// RANDOM NUMBER GENERATOR

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// ------------- RANDOM NUMBER GENERATOR PROGRAM -----------

const myBtn = document.getElementById("myBtn");
const lbl1 = document.getElementById("Label1");
const lbl2 = document.getElementById("Label2");
const lbl3 = document.getElementById("Label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;


myBtn.onclick = function(){
randomNum1 = Math.floor(Math.random() * max) + min;
randomNum2 = Math.floor(Math.random() * max) + min;
randomNum3 = Math.floor(Math.random() * max) + min;

lbl1.textContent = randomNum1;
lbl2.textContent = randomNum2;
lbl3.textContent = randomNum3;
}