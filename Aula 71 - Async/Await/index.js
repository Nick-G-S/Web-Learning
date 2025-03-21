// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

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

         if (trashOut) {
            resolve("You take out the trash ♻");
         } else {
            reject("You DIDN'T take the trash out");
         }


      }, 500);
   });
}

async function doChores() //If async isn't before the function it will cause an error
 {
   try{
   const walkDogResult = await walkTheDog();
   console.log(walkDogResult);

   const cleanKitchenResult = await cleanKitchen();
   console.log(cleanKitchenResult);

   const takeOutTrashResult = await takeOutTrash();
   console.log(takeOutTrashResult);

   console.log("You finished all the chores!");
   } catch(error){
      console.error(error);
   }
}

doChores();