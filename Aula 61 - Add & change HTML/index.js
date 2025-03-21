// --------------- EXAMPLE 1 <h1> ----------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1"
newH1.style.color = "toamto";
newH1.style.textAlign  = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box4").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");

// document.body.insertBefore(newH1, box2);


// ELEMENTS WITH NO ID
// const boxes = document.querySelectorAll(".box");

// document.body.insertBefore(newH1, boxes[1])

// REMOVE HTML ELEMENT

document.body.removeChild(newH1);

// --------------- EXAMPLE 2 <li> ----------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id= "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
// STEP 3 APPEND ELEMENT TO DOM
// document.body.append("coconut");
// document.body.prepend(newListItem);
//  document.getElementById("fruits").append("li");
//  document.getElementById("fruits").prepend("li");

// isert before items -------------------------------

 const orange = document.getElementById("orange");
 document.getElementById("fruits").insertBefore(newListItem, orange);

// ELEMENTS WITH NO ID

const listItems = document.querySelectorAll("#fruits li");
//  document.getElementById("fruits").insertBefore(newListItem, listItems[2]);

// REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(listItems[2]);
