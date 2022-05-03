const playArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
   
    const randomNumber = Math.floor(Math.random() * 3);
    return playArray[randomNumber];
}

