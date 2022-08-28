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
   };

   const computerSelection = getComputerChoice();

   function getPlayerChoice(){

      let answer = '';

      answer = prompt('Enter Rock, Paper, or Scissors');

      return answer;
   }
   
   const userSelection = getPlayerChoice();


   
   
   
   /* Now have to make a function to play a round of the game
      I have the function that succesfully generates a selection, which will be a parameter (Will try making parameter the function)
      Need to use if else in the function to give the outcomes for each result. 
      Thinking of using a switch function for each possible outcome
      Will try using a bunch of if elses first*/

      var userScore = 0;
      var computerScore = 0;
   
              
      function playTrial(userSelection, computerSelection) {
         //Need function to keep score after the trial
         //Have math function to add score to each person depending on scenario
         //Result in the end with who wins or loses and the score

         if (userSelection === computerSelection) {
            return 'It is a draw!' + ' User: ' + userScore + ' Computer: ' + computerScore;
         } else if (userSelection === 'Rock' &&  computerSelection === 'Paper') {
            computerScore += 1;
            return 'You lose! Paper beats rock!' + ' User: ' + userScore + ' Computer: ' + computerScore;
         } else if (userSelection ==='Rock' && computerSelection === 'Scissors') {
            userScore += 1;
            return 'You win! Rock beats Scissors!' + ' User: ' + userScore + ' Computer: ' + computerScore;         
         } else if (userSelection === 'Paper' && computerSelection === 'Rock') {
            userScore += 1;
            return 'You win! Paper beats rock!' + ' User: ' + userScore + ' Computer: ' + computerScore;
         } else if (userSelection === 'Paper' && computerSelection === 'Scissors') {
            computerScore += 1;
            return 'You lose! Scissors beats paper!' + ' User: ' + userScore + ' Computer: ' + computerScore;
         } else if (userSelection === 'Scissors' && computerSelection === 'Paper') {
            userScore += 1;
            return 'You win! Scissors beats paper!' + ' User: ' + userScore + ' Computer: ' + computerScore;
         } else if (userSelection === 'Scissors' && computerSelection === 'Rock') {
            computerScore += 1;
            return 'You lose! Rock beats scissors!' + ' User: ' + userScore + ' Computer: ' + computerScore;
         }
      }

      function fiveTrials() {

         for (let i = 0; i < 5; i++) {
         const computerSelection = getComputerChoice();
         const userSelection = getPlayerChoice();
         console.log(playTrial(userSelection, computerSelection));
      }
   }

fiveTrials();