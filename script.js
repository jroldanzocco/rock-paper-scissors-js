function playerSelection() {
  let playerSelect = prompt(
    "Enter your play! Rock, Paper, or Scissors"
  ).toLowerCase();
  return playerSelect;
}
function computerPlay() {
  const playArray = ["rock", "paper", "scissors"];
  const randomNumber = getRandomInt(0,3);
  return playArray[randomNumber];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Won! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Won! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Rock beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Won! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats scissors";
  } else {
    return "Invalid value";
  }
}

