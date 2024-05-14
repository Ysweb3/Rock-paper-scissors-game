let computerScore = 0;
let humanScore = 0;
let winner;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

const scoreContainer = document.querySelector("#Score-Cointainer");

const scoreDisplay = document.createElement("div");
scoreContainer.appendChild(scoreDisplay);

const winnerDisplay = document.createElement("h3");
scoreContainer.appendChild(winnerDisplay);


resetBtn.addEventListener("click" , () => {
  //ADD RESET BUTTON
    /*scoreDisplay.remove();
    computerScore = 0;
    humanScore = 0;*/

});


function GetComputerChoice(){
    let choice;
    let randomNum = Math.floor(Math.random() * 3);//Random number between 0 - 2
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
function PlayRound(computerChoice, humanChoice){
    let winner;
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
function PlayGame(){
    
    let computerChoice = "";
    let humanChoice = "";

    rockBtn.addEventListener("click" , () => {
        
        computerChoice = GetComputerChoice();
        winner = PlayRound(computerChoice, "Rock");
        humanChoice = 'Rock';
        GetWinner(winner)
    });

    paperBtn.addEventListener("click" , () => {
        computerChoice = GetComputerChoice();
        winner = PlayRound(computerChoice, "Paper");
        humanChoice = 'Paper';
        GetWinner(winner)
    });

    scissorsBtn.addEventListener("click" , () => {
        computerChoice = GetComputerChoice();
        winner = PlayRound(computerChoice, "Scissors");
        humanChoice = 'Scissors';
        GetWinner(winner)
        
    });
    console.log(winner);

    function GetWinner(winner){
            if (winner == "Computer Wins!"){//Add one point to computer
                ++computerScore;
                scoreDisplay.textContent = (computerChoice+" beats "+humanChoice+" Computer wins this round.Computer's Score: "+computerScore+" Your Score: "+humanScore);;
                console.log(computerChoice+" beats "+humanChoice+" Computer wins this round.Computer's Score: "+computerScore+" Your Score: "+humanScore);
            }
            else if (winner == "Human Wins!"){//Add one point to human
                ++humanScore;
                scoreDisplay.textContent = (humanChoice+" beats "+computerChoice+" You win this round.Computer's Score: "+computerScore+" Your Score: "+humanScore);
                console.log(humanChoice+" beats "+computerChoice+" You win this round.Computer's Score: "+computerScore+" Your Score: "+humanScore);
            }
            else {//Tie do nothing
                scoreDisplay.textContent = ("It's a tie. Computer's Score: "+computerScore+" Your Score: "+humanScore);
                console.log("It's a tie. Computer's Score: "+computerScore+" Your Score: "+humanScore);
            }
    //Game end 
    if (computerScore == 5 || humanScore == 5) {
        console.log("computer:"+computerScore+" human:"+humanScore);
        if (computerScore > humanScore){
            winnerDisplay.textContent = ("Computer Wins the game! Computer's Score: "+computerScore+" Your Score: "+humanScore);
            console.log("Computer Wins the game! Computer's Score: "+computerScore+" Your Score: "+humanScore);
            //Reset score
            computerScore = 0;
            humanScore = 0;
        }
        else if(computerScore < humanScore){
            winnerDisplay.textContent = ("You Win the game! Computer's Score: "+computerScore+" Your Score: "+humanScore);
            console.log("You Win the game! Computer's Score: "+computerScore+" Your Score: "+humanScore);
            //Reset score
            computerScore = 0;
            humanScore = 0;
        }   
        else{
            winnerDisplay.textContent = ("It's a TIE! Computer's Score: "+computerScore+" Your Score: "+humanScore);
            console.log("It's a TIE! Computer's Score: "+computerScore+" Your Score: "+humanScore);
            //Reset score
            computerScore = 0;
            humanScore = 0;
        }   
    }
}
    
}



PlayGame();




