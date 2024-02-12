// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
//
// PC will randomly choose Rock, Papers or Scissors at the start of the game
// Player will input Rock, Papers or Scissors
// Winner is determined after 5 rounds

const rps = ["Rock", "Papers", "Scissors"];

function getComputerChoice() {
    return rps[Math.floor(Math.random()*3)];
}

const computerSelection = getComputerChoice();

const tie = "It's a tie!"
const win = "You win!"
const lose = "You lose!"
let playerScore = 0
let computerScore = 0

function playRound() {
    playerSelection = prompt(`Choose between ${rps[0]}, ${rps[1]} or ${rps[2]}`);
    playerSelection = (playerSelection.charAt(0).toUpperCase() + (playerSelection.slice(1).toLowerCase()));
    const computerSelection = getComputerChoice(); // Randomize selection at the start of each round
    if (playerSelection === computerSelection) {
        alert(`It's a tie! You both picked ${playerSelection}`)
        return result = tie
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`)
        playerScore = playerScore+1
        return result = win
    }
    else if (playerSelection === "Papers" && computerSelection === "Rock") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`)
        playerScore = playerScore+1
        return result = win
    }
    else if (playerSelection === "Scissors" && computerSelection === "Papers") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`)
        playerScore = playerScore+1
        return result = win
    } else {
        alert(`You lose, ${computerSelection} beats ${playerSelection}`)
        computerScore = computerScore+1
        return result = lose
    }
}

function playGame() {
    playRound(); // game 1
    playRound(); // game 2
    playRound(); // game 3
    playRound(); // game 4
    playRound(); // game 5
    if (playerScore === computerScore) {
        alert(`${tie} Score: ${playerScore} - ${computerScore}`)
    } else if (playerScore > computerScore) {
        alert(`${win} Score: ${playerScore} - ${computerScore}`)
    } else {
        alert(`${lose} Score: ${playerScore} - ${computerScore}`)
    }
}

playGame(); // Initializes the game