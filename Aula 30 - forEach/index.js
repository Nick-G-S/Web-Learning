//  forRach() = method used to interate over the elements
//              of an array and apply a specific function (callback)
//              to each element

//              array.forEach(callback)
//              element, index, array are provided

/* ------------------ First Exemple -------------------
let nmmbers = [1,2,3,4,5];

nmmbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square (element, index, array){
    array[index] = math.pow(element * 2);
}

function display(element){
    console.log(element);
}
*/

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(lowerCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}