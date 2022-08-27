/* Going to play rocks paper scissors against the computer
   Start by having the computer randomly generate it's choice
   Have to start with a function that will generate randomly either 'rock', 'paper', or 'scissors'
   Will have the function randomly generate an integer between 0 and 2.
   Will create an array with the options 'rock', 'paper', and 'scissors'
   Will use the randomly generate number in a splice function to return one of the words */

  
   var computerSelection = (function getComputerChoice() {

   let randomNumber = Math.floor(Math.random() * 3);

   let myArray = ['Rock', 'Paper', 'Scissors'];
   
   return myArray.splice(randomNumber,1).toString();
})();



/* Now have to make a function to play a round of the game
   I have the function that succesfully generates a selection, which will be a parameter (Will try making parameter the function)
   Need to use if else in the function to give the outcomes for each result. 
   Thinking of using a switch function for each possible outcome
   Will try using a bunch of if elses first*/

   var userSelection = prompt('Enter Rock, Paper, or Scissors');
   
   function fiveRoundGame(userSelection){

      for (i = 1; i<=5; i++) {   
   function playTrial(userSelection) {
      
      if (userSelection === computerSelection) {
         return console.log('It is a draw!');
      } else if (userSelection === 'Rock' &&  computerSelection === 'Paper') {
         return console.log('You lose! Paper beats rock!');
      } else if (userSelection ==='Rock' && computerSelection === 'Scissors') {
         return console.log('You win! Rock beats Scissors!');         
      } else if (userSelection === 'Paper' && computerSelection === 'Rock') {
         return console.log('You win! Paper beats rock!');
      } else if (userSelection === 'Paper' && computerSelection === 'Scissors') {
         return console.log('You lose! Scissors beats paper!');
      } else if (userSelection === 'Scissors' && computerSelection === 'Paper') {
         return console.log('You win! Scissors beats paper!');
      } else if (userSelection === 'Scissors' && computerSelection === 'Rock') {
         return console.log('You lose! Rock beats scissors!');
      }
   }
}
}

   playTrial(userSelection);