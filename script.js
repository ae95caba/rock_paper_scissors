var playerselection 

//returns a random number between 0 an 2 which will be used to decid between rock paper or scisors


function randomNumber(){
   return Math.floor(Math.random()*3);
}

//uses the randomNumber function to make the computer pick rock paper or scissors

function getComputerChoice(){
   var rdmNum = randomNumber();
   if (rdmNum===0) {
      var choice="Scissors";
   }else if (rdmNum===1){
         var choice="Paper";
      }
   else if (rdmNum===2){
      var choice="Rock";
   };
   return choice
}



const userChoice = document.querySelector("#user-choice");

const computerChoice = document.querySelector("#computer-choice");

const playerCounter = document.querySelector("#player-counter");
let playerCounterArray = ["player wins" , 0 ];


const computerCounter = document.querySelector("#computer-counter");
let computerCounterArray = ["Computer wins" , 0 ];


//plays 1 round of rock paper scissors returning the winner as a string
//in the computerselection parameter, the function getComputerChoice() should be used
//the first parameter makes it so the defaul value will be to show a prompt whos input will be the  playerselection

function playRound(playerselection){
   userChoice.innerText = `Player choice: ${playerselection}`;

   var computerselection = getComputerChoice();
   computerChoice.innerText =`Computer choosed: ${computerselection}`;

   if (computerselection==="Scissors"){
      if (playerselection==="rock"){
         winner.innerText = "Player wins round";
      }else if (playerselection==="paper"){
         winner.innerText ="Player looses round";
      }else {
         winner.innerText = "Is a tie round";
      }
   }

   if (computerselection==="Paper"){
      if (playerselection==="rock"){
         winner.innerText = "Player looses round";
      }else if (playerselection==="paper"){
         winner.innerText ="Is a tie round";
      }else {
         winner.innerText = "Player wins round";
      }
   }

   if (computerselection==="Rock"){
      if (playerselection==="rock"){
         winner.innerText = "Is a tie round";
      }else if (playerselection==="paper"){
         winner.innerText ="Player wins round";
      }else {
          winner.innerText = "Player looses round";
      }
   };
   
  
   

      if(winner.innerText === "Player wins round") { 
         
         playerCounterArray[1] += 1 ;
         playerCounter.innerText = playerCounterArray;
      }else if (winner.innerText === "Player looses round"){
         computerCounterArray[1] += 1 ;
         computerCounter.innerText = computerCounterArray;
      }else if (winner.innerText === " Its a tie round") {
         return;
      }
   
}



//-------------------  UI  -----------------------------

const winner = document.querySelector("#winner");

const scissors = document.getElementById("scissors");
const playerOptions = document.querySelector(".player-options");
const finalResult = document.querySelector(".final-result");

const finalWinner = document.querySelector("#final-winner");

function equisss (choice) {
   
   if (playerCounterArray[1] < 5 && computerCounterArray[1] <5 ){
      playRound(choice);}
   if (playerCounterArray[1] === 5 || computerCounterArray[1] === 5 ){
      
      
      playerOptions.style.display = "none";
      info.style.display="none";
     
      finalResult.style.display="block";

      if (playerCounterArray[1]>computerCounterArray[1]){
         finalWinner.innerText = "You win, congratulations!";
      }

      if (playerCounterArray[1]<computerCounterArray[1]){
         finalWinner.innerText = "You lose sucker !";
      }

   
   }

}

scissors.addEventListener("click", () => equisss("scissors"))

const rock = document.getElementById("rock");
rock.addEventListener("click", () => equisss("rock"));

const paper = document.getElementById("paper");
paper.addEventListener("click", () => equisss("paper"));


const play = document.querySelector("#play");

const info = document.querySelector(".info");



play.addEventListener("click", () => {
   playerOptions.style.display="block";
   play.style.display = "none";
   

})




