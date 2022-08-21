var playerselection 

//returns a random number between 0 an 2 which will be used to decid between rock paper or scisors
function randomNumber(){
   return Math.floor(Math.random()*3);
}

//uses the randomNumber function to make the computer pick rock paper or scissors

function getComputerChoice(){
   if (randomNumber()===0) {
      var choice="Scissors";
   }else if (randomNumber()===1){
         var choice="Paper";
      }
   else {
      var choice="Rock";
   };
   return choice
}


//plays 1 round of rock paper scissors returning the winner as a string


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











 


//every time the game is run in the loop, a counter will increase every time someone wins
function game(){
   var playerWinsCount = 0;
   var computerWinsCount = 0;

   for (var i = 1; i < 6; i++) {
      var roundResult = console.log( playRound(playerselection,getComputerChoice()));
      console.log (i);
      
      if (roundResult==="Player wins"){
        playerWinsCount++;
      }else if (roundResult==="Player looses"){
         computerWinsCount++;
      }

   };

   //shows the final result
   
   if (playerWinsCount>computerWinsCount){
      return "Player Wins match";
   }else if (computerWinsCount>playerWinsCount){
      return "Computer Wins match";   
   }else {
      return "Is a tie match";
   }

}  



console.log(game());




