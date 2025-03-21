// Nodelist = Static collection of HTML elements by (id, class, element
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            Nodelist won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons"); // why LET instead of CONST? Because we will re-assign it to include in the nodelist

console.log(buttons);

// ADD HTML/CSS PROPERTIES

// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";

// });

//CLICK event listener

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato";
    })

});

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button =>{
    button.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
        });

    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

// ADD AN ELEMENTO INTO A NODELIST

const newBtn = document.createElement("button"); // STEP1
newBtn.textContent = "Button 5";        //STEP 2
newBtn.classList = "myButtons";
document.body.appendChild(newBtn);

console.log(buttons); // still not in nodelist

buttons = document.querySelectorAll(".myButtons"); // We are now re-assigning it that's why it wasn't CONST in the beginning  

console.log(buttons); // now it is in the nodelist

// REMOVE AN ELEMENT FOR THE NODELIST

buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        console.log(buttons); // But it is still in the nodelist

        // so you remove using queryselector
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons); // now it's removed

    })
}) 