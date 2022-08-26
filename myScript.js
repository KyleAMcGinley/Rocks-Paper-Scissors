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

   var userSelection = ''

   function playRockPaperScissors(userSelection, computerSelection) {
      
      if (userSelection === computerSelection) {
         console.log('It is a draw!')
      } else if (userSelection === 'Rock' && 'Paper')

   }
   
   var a = '';
   var b = '';
   
   function playTrial(a, b) {
      
      if (a === b) {
         return console.log('It is a draw!');
      } else if (a === 'Rock' && b = 'Paper') {
         return console.log('You lose! Paper beats rock!');
      } else (a === 'Paper' && b === 'Rock') {
         return console.log('You win! Paper beats rock!')
      }

   }

   console.log(playTrial('Rock', 'Paper'))


