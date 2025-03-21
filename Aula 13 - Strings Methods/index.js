// String methods = allow you to manipulate and work with text (strings)


let userName = "BroCode";

console.log(userName.charAt(0)); // displays one letter at a certain location of the string

console.log(userName.indexOf("o")); // displays the first location of the letter  
console.log(userName.lastIndexOf("o")); // displays the last location of the letter

console.log(userName.length); // displays how long is the centence (spaces included)

/* ------------------------------- Trim -------------------------------------
userName = userName.trim(); // this deletes whatever spaces there are on a string

console.log(userName);
*/

/* ------------------------------- Uppercase -------------------------------------
userName = userName.toUpperCase(); // this makes it uppercase

console.log(userName);
*/

/* ------------------------------- Lowercase -------------------------------------
userName = userName.toLpperCase(); // this makes it lowercase

console.log(userName);
*/
/* ------------------------------- Repeat -------------------------------------
userName = userName.repeat(3); // this repeats the string

console.log(userName);
*/
/* ------------------------------- StartsWith -------------------------------------
userName = userName.startsWith("Something"); // Displays true or false if the strings starts with Something

console.log(userName);
*/
/* ------------------------------- EndsWith -------------------------------------
userName = userName.endsWith("Something"); // Displays true or false if the strings ends with Something

console.log(userName);
*/
/* ------------------------------- Includes -------------------------------------
userName = userName.includes("Something"); // Displays true or false if the strings includes Something

console.log(userName);
*/
/* ------------------------------- ReplacesAll -------------------------------------
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", ""); // this replaces all the fist seted element with the secound seted element

console.log(phoneNumber);
*/
/* ------------------------------- padStart -------------------------------------
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padStart(15, "0"); // this includes in the beggining of the second value to a string, until it is the lengh of the first value

console.log(phoneNumber);
*/
/* ------------------------------- padEnd -------------------------------------
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padEnd(15, "0"); // this includes in the end of the second value to a string, until it is the lengh of the first value

console.log(phoneNumber);
*/
