const options = ['rock', 'paper','scissors'];

let playerScore = 0,
    computerScore = 0;
  
const computerChoice = (min = 0, max = 2) =>{
   let computerSelection =  Math.floor(Math.random() * (max - min + 1) + min);
    return options[computerSelection];
}

const humanChoice = ()=>{
    let playerSelection = prompt('¿Rock, Paper or Scissors?');
    
    playerSelection = playerSelection === null ? playerSelection="": playerSelection.toLowerCase();

    if(typeof playerSelection != String && !(options.includes(playerSelection))){
        alert("Debes seleccionar una opción valida ");
        humanChoice();
    } else{
        return playerSelection;
    }

}

const playRound = (computerChoice, humanChoice) =>{

    
    if((humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")||
    (humanChoice === "rock" && computerChoice === "scissors")){

        console.log(`ganaste, ${humanChoice} vence ${computerChoice}`);
        return playerScore++;

    } else if((humanChoice === "paper" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "rock")||
    (humanChoice === "rock" && computerChoice === "paper")){

        console.log(`perdiste, ${computerChoice} vence ${humanChoice}`);
        return computerScore++;
    }else{
        console.log("empate")
    }
        

} 

const playGame =  () =>{
    
    
    while(playerScore < 5){
        
        let getHumanChoice = humanChoice(),
         getComputerChoice = computerChoice();
         playRound(getComputerChoice, getHumanChoice);
         alert(`player = ${playerScore}, computer = ${computerScore}`);
         if(playerScore >= 5 ){
            alert("Jugador gana")
            break;
         } else if( computerScore >= 5){
            alert("Computadora gana")
            break;
         }
        }
}


// playGame();