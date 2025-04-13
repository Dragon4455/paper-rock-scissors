const $button = document.querySelector(".buttons");
const $result = document.querySelector("#result");
const $score = document.querySelector("#score");

const options = ['rock', 'paper','scissors'];

let playerScore = 0,
    computerScore = 0;

const computerChoice = (min = 0, max = 2) =>{
   let computerSelection =  Math.floor(Math.random() * (max - min + 1) + min);
    return options[computerSelection];
}

const humanChoice = (e)=>{
    let playerSelection = e.target.id
    
 switch(playerSelection){
    case "rock":
    case "paper":
    case "scissors":
        console.log(playerSelection)
        return  playerSelection
      
 }

}

const playRound = (humanChoice, computerChoice) =>{

    
    if((humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")||
    (humanChoice === "rock" && computerChoice === "scissors")){

        $result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        return playerScore++;

    } else if((humanChoice === "paper" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "rock")||
    (humanChoice === "rock" && computerChoice === "paper")){

        $result.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
        return computerScore++;
    }else{
        $result.textContent = "Draw";
    }
        

} 



$button.addEventListener("click", (e)=>{
    const setHumanChoice = humanChoice(e);
    const getComputerChoice = computerChoice();
    
    playRound(setHumanChoice, getComputerChoice);
    if(playerScore === 5){
        $result.textContent = "The players Win the game. Press any option to new game";
        $score.textContent = `player = ${playerScore}, computer = ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5){
        $result.textContent = "The players Lose the game. Press any option to new game";
        $score.textContent = `player = ${playerScore}, computer = ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else{

        $score.textContent = `player = ${playerScore}, computer = ${computerScore}`;
    }


});
    
