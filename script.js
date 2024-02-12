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

const playerSelection = "Rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both picked ${playerSelection}`)
    } else {
        if (playerSelection === "Rock" && computerSelection === "Papers") {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        }
        if (playerSelection === "Papers" && computerSelection === "Rock") {
            console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        }
        if (playerSelection === "Scissors" && computerSelection === "Papers") {
            console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        } 
        else {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        }
    }
}

function playGame() {

}