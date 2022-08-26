/* Going to play rocks paper scissors against the computer
   Start by having the computer randomly generate it's choice
   Have to start with a function that will generate randomly either 'rock', 'paper', or 'scissors'
   Will have the function randomly generate an integer between 0 and 2.
   Will create an array with the options 'rock', 'paper', and 'scissors'
   Will use the randomly generate number in a splice function to return one of the words */

  
   function getComputerChoice() {

   let randomNumber = Math.floor(Math.random() * 3);

   let myArray = ['Rock', 'Paper', 'Scissors'];
   
   return myArray.splice(randomNumber,1).toString();
}

console.log(getComputerChoice())

/* Now have to make a function to play a round of the game
   I have the function that succesfully generates a selection, which will be a parameter (Will try making parameter the function)
   Need to use if else in the function to give the outcomes for each result. */

function playRockPaperScissors
