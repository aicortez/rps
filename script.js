// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
//
// PC will randomly choose Rock, Papers or Scissors at the start of the game
// Player will input Rock, Papers or Scissors
// Rock > Scissors
// Papers > Rock
// Scissors > Papers
// Best of 5

const rps = ["Rock", "Papers", "Scissors"];

function getComputerChoice() {
    return rps[Math.floor(Math.random()*3)];
}

const computerSelection = getComputerChoice();

function playRound() {
    playerSelection = prompt(`Choose between ${rps[0]}, ${rps[1]} or ${rps[2]}`);
    playerSelection = (playerSelection.charAt(0).toUpperCase() + (playerSelection.slice(1).toLowerCase()));
    if (playerSelection === computerSelection) {
        alert(`It's a tie! You both picked ${playerSelection}`)
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection === "Papers" && computerSelection === "Rock") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection === "Scissors" && computerSelection === "Papers") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`)
    } else {
        alert(`You lose, ${computerSelection} beats ${playerSelection}`)
    }
}

function playGame() {
}

playRound();