const playOptions = ["rock", "paper", "scissors"];
function playerSelection() {
  if(userChoice.innerText === "Paper"){
    return playOptions[1]
  }else if(userChoice.innerText === "Rock"){
    return playOptions[0]
  }else{
    return playOptions[2]
  }
}
function cpuPlay() {
  
  const randomNumber = getRandomInt(0, 3);
  return playOptions[randomNumber];
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
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Won! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats scissors";
  } else {
    return "Invalid value";
  }
}

// function game() {
//   let gamesWithWinner = 0;
//   let userPoint = 0;
//   let compPoint = 0;
//   let tie = 0;
//   while(gamesWithWinner < 5){
    
//     let round = playRound(playerSelection(),computerPlay())
//     if (round.includes("Won")){
//       gamesWithWinner++
//       userPoint++
//       console.log(round)
//     } else if(round.includes("Lose")){
//       gamesWithWinner++
//       compPoint++
//       console.log(round)
//     }else{
//       tie++
//       console.log(round)
//     }
//   }
//   if(userPoint > compPoint){
//     console.log(`You Won!!! Total score: PLAYER: ${userPoint} vs. CPU: ${compPoint}`)
//   }else{
//     console.log(`You Lose!!!`)
//     console.log(`Total score: CPU: ${compPoint} vs. PLAYER: ${userPoint}`)
//   }
  
  
// }

/*  DOM Version    */
//Selectors
const paper = document.querySelector("#paper")
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const userChoice = document.querySelector('#user-select')
const cpuChoice = document.querySelector('#cpu-select')

const resultDiv = document.querySelector('#result')
function showScore(){
  const element = document.querySelector('#contenedor')
  element.classList.remove('hidden')
}

paper.addEventListener('click',(e)=>{
  userChoice.innerText = 'Paper'
  cpuChoice.innerText = computerPlay
  resultDiv.innerText = playRound(playerSelection(),computerPlay)
  showScore()
})
rock.addEventListener('click',(e)=>{
  const computerPlay = cpuPlay()
  userChoice.innerText = 'Rock'
  cpuChoice.innerText = computerPlay
  resultDiv.innerText = playRound(playerSelection(),computerPlay)
  showScore()
})
scissors.addEventListener('click',(e)=>{
  userChoice.innerText = 'Scissors'
  cpuChoice.innerText = computerPlay
  resultDiv.innerText = playRound(playerSelection(),computerPlay)
  showScore()
})


