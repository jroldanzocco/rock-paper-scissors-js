const playArray = ["rock", "paper", "scissors"];

function computerPlay(){
   
    const randomNumber = Math.floor(Math.random() * 3);
    return playArray[randomNumber];
}

console.log(computerPlay())

function gameRound(playerSelection , computerSelection){
    
    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Won! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats Scissors";
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Rock beats Paper";
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Won! Scissors beats Paper";
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats scissors";
    }else{
        return "Draw"
    }
}

