const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game(){
    for (let i = 1; i <= 5; i++){
        playRound(i)
    }
    logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}


function playerChoice(){
    let input = prompt("Type Rock, Paper, or Scissors");
    return input = input.toLowerCase();
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}



function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') || 
        (choiceP === 'scissors' && choiceC == 'paper')
    ){
        return 'Player';
    }else{
        return 'Computer';
    }
}

function logWins(){
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    console.log('Results:');
    console.log('Player: ', playerWins);
    console.log('Computer: ', computerWins);
    console.log('Ties: ', ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round: ', round);
    console.log('Player Chose: ', playerChoice);
    console.log('Computer Chose: ', computerChoice);

    if (winner === 'Tie'){
        console.log('Round was a tie!')
    } else{
        console.log(winner, 'won the round!');
    }
    console.log('--------------------------------------------');
}


const buttons = document.querySelectorAll('button');
const rockButton = document.querySelector('button#rock');
const paperButton = document.querySelector('button#paper');
const scissorsButton = document.querySelector('button#scissors');
const playerScore = document.querySelector('div.player-score');
const computerScore = document.querySelector('div.computer-score');
const tieScore = document.querySelector('div.tie-score');
const winnerScoreDisplay = document.querySelector('div.display-winner');

rockButton.addEventListener('click', rockGame);
paperButton.addEventListener('click', paperGame);
scissorsButton.addEventListener('click', scissorsGame);

var playerResults = 0;
var computerResults = 0;
var tieResults = 0;

function rockGame(){
    let playerSelection = 'rock';
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner === 'Player'){
        playerResults += 1;
        playerScore.textContent="Player: " + playerResults.toString();
    } else if (winner === 'Computer'){
        computerResults += 1;
        computerScore.textContent="Computer: " + computerResults.toString();
    } else{
        tieResults += 1;
        tieScore.textContent= "Tie: " + tieResults.toString();
        }
   
    if(playerResults === 5){
        winnerScoreDisplay.textContent="Player Wins!";
    }else if(computerResults === 5){
        winnerScoreDisplay.textContent="Computer Wins";
    }
}

function paperGame(){
    let playerSelection = 'paper';
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner === 'Player'){
        playerResults += 1;
        playerScore.textContent="Player: " + playerResults.toString();
    } else if (winner === 'Computer'){
        computerResults += 1;
        computerScore.textContent="Computer: " + computerResults.toString();
    } else{
        tieResults += 1;
        tieScore.textContent= "Tie: " + tieResults.toString();
        }

    if(playerResults === 5){
        winnerScoreDisplay.textContent="Player Wins!";
    }else if(computerResults === 5){
        winnerScoreDisplay.textContent="Computer Wins";
    }
}

function scissorsGame(){
    let playerSelection = 'scissors';
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner === 'Player'){
        playerResults += 1;
        playerScore.textContent="Player: " + playerResults.toString();
    } else if (winner === 'Computer'){
        computerResults += 1;
        computerScore.textContent="Computer: " + computerResults.toString();
    } else{
        tieResults += 1;
        tieScore.textContent= "Tie: " + tieResults.toString();
        }

    if(playerResults === 5){
        winnerScoreDisplay.textContent="Player Wins!";
    }else if(computerResults === 5){
        winnerScoreDisplay.textContent="Computer Wins";
    }
}