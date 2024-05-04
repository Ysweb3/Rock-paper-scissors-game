function getComputerChoice(){
    let choice;
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0){
        return choice = "Rock";
    }
    else if (randomNum == 1){
        return choice = "Paper"
    }
    else {
        return choice ="Scissors"
    }

}

function getHumanChoice(){
    let choice;
    let promptInput = prompt("Enter Choice: Rock, Paper or Scissors");
    if (promptInput.toUpperCase() == "ROCK"){
        return choice = "Rock";
    }
    else if (promptInput.toUpperCase() == "PAPER"){
        return choice = "Paper";
    }
    else if (promptInput.toUpperCase() == "SCISSORS"){
        return choice = "Scissors";
    }
    else{
        alert(promptInput + "is not a valid input refresh the page");
    }
    
}

function playRound(computerChoice, humanChoice){
    let winner;
   // console.log("Computer: "+computerChoice);
   // console.log("Human: "+humanChoice);

    if(computerChoice == humanChoice){
        winner = "It's a Tie!";
    }
    else if(computerChoice == "Rock" && humanChoice == "Paper"){
        winner = "Computer Wins!"
    }
    else if(computerChoice == "Paper" && humanChoice == "Rock"){
        winner = "Human Wins!"
    }
    else if(computerChoice == "Scissors" && humanChoice == "Paper"){
        winner = "Computer Wins!"
    }
    else if(computerChoice == "Paper" && humanChoice == "Scissors"){
        winner = "Human Wins!"
    }
    else if(computerChoice == "Rock" && humanChoice == "Scissors"){
        winner = "Computer Wins!"
    }
    else if(computerChoice == "Scissors" && humanChoice == "Rock"){
        winner = "Human Wins!"
    }

    return winner;
}
function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    let winner;
    

    for (let i = 1; i < 6; i++) {
        alert("Round "+i+" press Ok to start.");
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        winner = playRound(computerChoice, humanChoice);
        if (winner == "Computer Wins!"){
            ++computerScore;//Add one point to computer
            alert(computerChoice+" beats "+humanChoice+" Computer wins this round.Computer Score: "+computerScore+" Your Score: "+humanScore);
        }
        else if (winner == "Human Wins!"){
            ++humanScore;//Add one point to human
            alert(humanChoice+" beats "+computerChoice+" You win this round.Computer Score: "+computerScore+" Your Score: "+humanScore);
        }
        else {
            alert("It's a tie");
        }
        //console.log(winner);
        
    }
    console.log("computer:"+computerScore+" human:"+humanScore);
    if (computerScore > humanScore){
        alert("Computer Wins the game! Computer Score: "+computerScore+" Your Score: "+humanScore);
    }
    else if(computerScore < humanScore){
        alert("You Win the game! Computer Score: "+computerScore+" Your Score: "+humanScore);
    }
    else{
        alert("It's a TIE! Computer Score: "+computerScore+" Your Score: "+humanScore);
    }
    
    
}

playGame();




