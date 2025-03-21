// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your web-page.

//add();
//remove();
//toggle(Remove if present, Add if not);
//replace(oldClass, newClass);
//contains();


// ADD & REMOVE ------------------------------------------


// myBtn.addEventListener("mouseover", event => {
//     myBtn.classList.add("hover");
// });

// myBtn.addEventListener("mouseout", event => {
//     myBtn.classList.remove("hover");
// });


// TOGGLE -----------------------------------------------

// myBtn.addEventListener("mouseover", event => {
//     myBtn.classList.toggle("hover");
// });

// myBtn.addEventListener("mouseout", event => {
//     myBtn.classList.toggle("hover");
// });

// REPLACE -----------------------------------------------
// const myBtn = document.getElementById("myBtn");
// const myH1 = document.getElementById("myH1");

// myBtn.classList.add("enabled");
// myH1.classList.add("enabled");

// myH1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//        event.target.textContent += "🤬";
//     } else {
//        event.target.classList.replace("enabled", "disabled");
//     }
// });

//  myBtn.addEventListener("click", event => {
//      if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//      } else {
//         event.target.classList.replace("enabled", "disabled");
//      }
//  });

// CHALLANGE ROUND --------------------------------------
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
   button.classList.add("enabled");
});

buttons.forEach(button =>{
   button.addEventListener("mouseover", event =>{
      event.target.classList.toggle("hover");
   });
});

buttons.forEach(button =>{
   button.addEventListener("mouseout", event =>{
      event.target.classList.toggle("hover");
   });
});

buttons.forEach(button =>{
   button.addEventListener("click", event => {

      if(event.target.classList.contains("disabled")){
         event.target.textContent += "🤬";
      } else{
         event.target.classList.replace("enabled", "disabled");
      }
      
   });
});


 

 

