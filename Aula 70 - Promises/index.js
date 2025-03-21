// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise ((resulve, reject) => [asynchronous code])

// DO THESE IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// ============== CALLBACK HELL ================
// function walkTheDog(callback){
//    setTimeout(() => {
//       console.log("You walk the dog 🦮");
//       callback();
//    }, 1500);
// }
// function cleanKitchen(callback){
//    setTimeout(() => {
//       console.log("You clean the kitchen 🧹");
//       callback();
//    }, 2500);
// }
// function takeOutTrash(callback){
//    setTimeout(() => {
//       console.log("You take out the trash ♻");
//       callback();
//    }, 500);
// }

// walkTheDog(() => {
//    cleanKitchen(() => {
//       takeOutTrash(() => console.log("You finished all the chores!")); 
//    });
// });

// METHOD CHAINING


function walkTheDog() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const dogwalked = true;

         if (dogwalked) {
            resolve("You walk the dog 🦮");
         } else {
            reject("You DIDN'T walk the dog");
         }


      }, 1500);
   });
}
function cleanKitchen() {


   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const kitchenClean = true;

         if (kitchenClean) {
            resolve("You clean the kitchen 🧹");
         } else {
            reject("You DIDN'T clean the kitchen");
         }

      }, 2500);
   });
}
function takeOutTrash() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const trashOut = true;

         if(trashOut){
            resolve("You take out the trash ♻");
         } else {
            reject("You DIDN'T take the trash out");
         }

         
      }, 500);
   });
}

walkTheDog().then(value => {
   console.log(value); return cleanKitchen()
}).then(value => {
   console.log(value); return takeOutTrash()
}).then(value => {
   console.log(value); console.log("You finhised all the chores!");
}).catch(error => console.error(error));