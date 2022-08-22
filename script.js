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


//plays 1 round of rock paper scissors returning the winner as a string
//in the computerselection parameter, the function getComputerChoice() should be used
//the first parameter makes it so the defaul value will be to show a prompt whos input will be the  playerselection

function playRound(playerselection= prompt("select rock paper or scissors").toLowerCase(),computerselection){
  
   if (computerselection==="Scissors"){
      if (playerselection==="rock"){
         return "Player wins";
      }else if (playerselection==="paper"){
         return"Player looses";
      }else {
         return "Is a tie";
      }
   }

   if (computerselection==="Paper"){
      if (playerselection==="rock"){
         return "Player looses";
      }else if (playerselection==="paper"){
         return"Is a tie";
      }else {
         return "Player wins";
      }
   }

   if (computerselection==="Rock"){
      if (playerselection==="rock"){
         return "Is a tie";
      }else if (playerselection==="paper"){
         return"Player wins";
      }else {
         return "Player looses";
      }
   };
   
}











 



function game(){
   //every time the game is run in the loop, a counter will increase every time someone wins
   var playerWinsCount = 0;
   var computerWinsCount = 0;

   for (var i = 1; i < 6; i++) {
      //this var is created so the function playRound will only run once, there
      var roundResult = (playRound(playerselection,getComputerChoice()));
        //this will show in console who wins each round
      console.log(roundResult);
      //this will show in console the round number
      console.log (`Round ${i}`);
      //this is just a counter
      if (roundResult==="Player wins"){
        playerWinsCount++;
      }else if (roundResult==="Player looses"){
         computerWinsCount++;
      }
      //this shows in console the wins counter
      console.log(`Player wins:${playerWinsCount}`);
      console.log(`Cimputer wins: ${computerWinsCount}`);

   };

   //this RETURNS the final result based of the previous counter
   

   if (playerWinsCount>computerWinsCount){
      
      return "Player Wins match";
   }else if (computerWinsCount>playerWinsCount){
      return "Computer Wins match";   
   }else if(computerWinsCount===playerWinsCount){
      return "Is a tie match";
   };

}  


//this SHOWS in the console the final result, plus every console log inside game()
console.log(game());




