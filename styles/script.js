const body = document.querySelector('body');
const rockB = document.createElement('button');
const paperB = document.createElement('button');
const scissorsB = document.createElement('button');
const results = document.createElement('div');

rockB.innerText = "Rock";
paperB.innerText = "Paper";
scissorsB.innerText = "Scissors";

body.appendChild(rockB);
body.appendChild(paperB);
body.appendChild(scissorsB);
body.appendChild(results);

let computerChoice;
let playerScore = 0;
let computerScore = 0;

scissorsB.addEventListener('click', oneRoundScissors);
rockB.addEventListener('click', oneRoundRock);
paperB.addEventListener('click', oneRoundPaper);

function getComputerChoice()
{
    computerChoice = Math.floor(Math.random()* 3);
    if (computerChoice === 0)
    {
        computerChoice = "rock";
    }
    else if (computerChoice === 1)
    {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function oneRound(e) 
{
    let playerChoice = e;
    getComputerChoice();
    let tie = `Tie! \nPlayer score: ${playerScore}. Computer score: ${computerScore}`;
    let win = `You Win! \nPlayer score: ${playerScore + 1}. Computer score: ${computerScore}`;
    let lose = `You Lose! \nPlayer score: ${playerScore}. Computer score: ${computerScore + 1}`;
    switch (playerChoice)
    {
        case "rock":
            if (computerChoice === "rock")
            {
                results.innerText = tie;
            }
            else if (computerChoice === "paper")
            {
                computerScore++;
                results.innerText = lose;
            }
            else if (computerChoice === "scissors")
            {
                playerScore++;
                results.innerText = win;
            }
        break;
        case "paper":
            if (computerChoice === "paper")
            {
                results.innerText = tie;
            }
            else if (computerChoice === "scissors")
            {
                computerScore++;
                results.innerText = lose;
            }
            else if (computerChoice === "rock")
            {      
                playerScore++;                  
                results.innerText = win;
            }
        break;
        case "scissors":
            if (computerChoice === "scissors")
            {
                results.innerText = tie;
            }
            else if (computerChoice === "rock")
            {
                computerScore++;
                results.innerText = lose;
            }
            else if (computerChoice === "paper")
            {
                playerScore++;
                results.innerText = win;
            }
        break;
        default:
            alert('Error');
    }
    console.log('p: ' + e + '\nc: ' + computerChoice + `\nPlayer score: ${playerScore}. Computer score: ${computerScore}`);
}   

function oneRoundRock()
{
if (playerScore !== 5 && computerScore !== 5)
{
    oneRound('rock');
}
checkWinner();
}

function oneRoundPaper()
{
if (playerScore !== 5 && computerScore !== 5)
{
    oneRound('paper');
}
checkWinner();
}

function oneRoundScissors()
{
if (playerScore !== 5 && computerScore !== 5)
{
    oneRound('scissors');
}
checkWinner();
}

function checkWinner()
{
if (playerScore === 5)
{
    results.innerText = `You Win the Game!!! \nPlayer score: ${playerScore}. Computer score: ${computerScore}`;
}
else if (computerScore === 5)
{
    results.innerText = `You Lose the Game!!! \nPlayer score: ${playerScore}. Computer score: ${computerScore}`;
}
}