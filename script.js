const rps = ["Rock", "Paper", "Scissors"]
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const span1 = document.createElement("span")
const span2 = document.createElement("span")
const span3 = document.createElement("span")
const span4 = document.createElement("span")
const h2 = document.createElement("h2")
const usrChoice = document.querySelector(".usr-choice")
const rdmChoice = document.querySelector(".rdm-choice")
const roundResult = document.querySelector(".round-result")
const gameScore = document.querySelector(".game-score")
const finalResult = document.querySelector("h2")

let userSelection = 0
let opponentSelection = 0
let result = 0

const tie = "It's a tie!"
const win = "You win!"
const lose = "You lose!"
let userScore = 0
let opponentScore = 0

rockButton.addEventListener("click" , () => {
    if (userScore < 5 && opponentScore < 5) {
        opponentSelection = randomChoice()
        userSelection = rps[0]
        playRound(userSelection, opponentSelection)
        span1.remove()
        span1.textContent = userSelection
        usrChoice.appendChild(span1)
        span2.textContent = opponentSelection
        rdmChoice.appendChild(span2)
        span3.textContent = result
        roundResult.appendChild(span3)
        const scoreArray = [userScore, opponentScore]
        ongoingScore = scoreArray.join(" - ")
        span4.textContent = ongoingScore
        gameScore.appendChild(span4)
    }
    if (userScore >= 5) {
        h2.textContent = "Congratulations, you won!"
        gameScore.appendChild(h2)
    } else  if (opponentScore >= 5) {
        h2.textContent = "You lost, better luck next time!"
        gameScore.appendChild(h2)
    }
});

paperButton.addEventListener("click" , () => {
    if (userScore < 5 && opponentScore < 5) {
        opponentSelection = randomChoice()
        userSelection = rps[1]
        playRound(userSelection, opponentSelection)
        span1.remove()
        span1.textContent = userSelection
        usrChoice.appendChild(span1)
        span2.textContent = opponentSelection
        rdmChoice.appendChild(span2)
        span3.textContent = result
        roundResult.appendChild(span3)
        const scoreArray = [userScore, opponentScore]
        ongoingScore = scoreArray.join(" - ")
        span4.textContent = ongoingScore
        gameScore.appendChild(span4)
    }
    if (userScore >= 5) {
        h2.textContent = "Congratulations, you won!"
        gameScore.appendChild(h2)
    } else  if (opponentScore >= 5) {
        h2.textContent = "You lost, better luck next time!"
        gameScore.appendChild(h2)
    }
});

scissorsButton.addEventListener("click" , () => {  
    if (userScore < 5 && opponentScore < 5) {
        opponentSelection = randomChoice()
        userSelection = rps[2]
        playRound(userSelection, opponentSelection)
        span1.remove()
        span1.textContent = userSelection
        usrChoice.appendChild(span1)
        span2.textContent = opponentSelection
        rdmChoice.appendChild(span2)
        span3.textContent = result
        roundResult.appendChild(span3)
        const scoreArray = [userScore, opponentScore]
        ongoingScore = scoreArray.join(" - ")
        span4.textContent = ongoingScore
        gameScore.appendChild(span4)
    } else if (userScore > opponentScore) {
        h2.textContent = "Congratulations, you won!"
        gameScore.appendChild(h2)
    } else {
        h2.textContent = "You lost, better luck next time!"
        gameScore.appendChild(h2)
    }
});

function randomChoice() {
    return rps[Math.floor(Math.random()*3)]
}

function playRound() {
    if (userSelection === opponentSelection) {
        result = tie
    }
    else if (userSelection === "Rock" && opponentSelection === "Scissors") {
        userScore++
        result = win
    }
    else if (userSelection === "Paper" && opponentSelection === "Rock") {
        userScore++
        result = win
    }
    else if (userSelection === "Scissors" && opponentSelection === "Paper") {
        userScore++
        result = win
    } else {
        opponentScore++
        result = lose
    }
    return result;
}