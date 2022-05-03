const playArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
   
    const ranmdomNumber = Math.floor(Math.random() * 3);
    return playArray[ranmdomNumber];
}

