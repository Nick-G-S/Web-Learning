// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore")
const computerScoreDisplay = document.getElementById("computerScore")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

   const computerChoice = choices[Math.floor(Math.random() * 3)];
   let result = "";

   if (playerChoice === computerChoice) {
      result = "IT'S A TIE!";
   } else {
      switch (playerChoice) {
         case "rock":
            (computerChoice === "scissors") ? result = "YOU WIN!" : result = "YOU LOSE!";
            break;
         case "paper":
            (computerChoice === "rock") ? result = "YOU WIN!" : result = "YOU LOSE!";
            break;
         case "scissors":
            (computerChoice === "paper") ? result = "YOU WIN!" : result = "YOU LOSE!";
            break;
      }
   }
   playerDisplay.textContent = `PLAYER: ${playerChoice}`;
   computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
   resultDisplay.textContent = result;

   resultDisplay.classList.remove("greenText", "redText");
   switch (result) {
      case "YOU WIN!":
         resultDisplay.classList.add("greenText");
         playerScoreDisplay.textContent = playerScore;
         playerScore++
         break;
      case "YOU LOSE!":
         computerScore++
         computerScoreDisplay.textContent = computerScore;
         resultDisplay.classList.add("redText");
         break;
   }
}