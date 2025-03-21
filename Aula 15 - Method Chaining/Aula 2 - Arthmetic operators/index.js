// Method Chaing = Callingonne method after another
//                 in one continuos line of code

// ------ NO METHOD CHAINING ------

let userName = window.prompt("Enter your username: ");

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(userName);

// ------ METHOD CHAINING ------

userName = userName.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase;

console.log(userName);

