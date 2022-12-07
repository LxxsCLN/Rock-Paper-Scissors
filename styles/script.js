const body = document.querySelector('body');
const rockB = document.createElement('button');
const paperB = document.createElement('button');
const scissorsB = document.createElement('button');
const results = document.createElement('div');
const playAgainB = document.createElement('button');

rockB.innerText = "Rock";
paperB.innerText = "Paper";
scissorsB.innerText = "Scissors";
results.innerText = 'Choose Rock, Paper or Scissors!';
playAgainB.innerText = 'Play Again!';

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
        computerChoice = "Rock";
    }
    else if (computerChoice === 1)
    {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function oneRound(e) 
{
    getComputerChoice();
    let tie = `Tie!\nYou chose: ${e}. The computer chose: ${computerChoice}.\nPlayer score: ${playerScore}. Computer score: ${computerScore}\nChoose Rock, Paper or Scissors!`;
    let win = `You Win!\nYou chose: ${e}. The computer chose: ${computerChoice}.\nPlayer score: ${playerScore + 1}. Computer score: ${computerScore}\nChoose Rock, Paper or Scissors!`;
    let lose = `You Lose!\nYou chose: ${e}. The computer chose: ${computerChoice}.\nPlayer score: ${playerScore}. Computer score: ${computerScore + 1}\nChoose Rock, Paper or Scissors!`;
    
    if ((e === 'Rock' && computerChoice === 'Rock') || (e === 'Paper' && computerChoice === 'Paper') || (e === 'Scissors' && computerChoice === 'Scissors'))
    {
        results.innerText = tie;
    }
    else if ((e === 'Rock' && computerChoice === 'Scissors') || (e === 'Paper' && computerChoice === 'Rock') || (e === 'Scissors' && computerChoice === 'Paper'))
    {
        playerScore++;
        results.innerText = win;
    }
    else
    {
        computerScore++;
        results.innerText = lose;
    }
    console.log('p: ' + e + '\nc: ' + computerChoice + `\nPlayer score: ${playerScore}. Computer score: ${computerScore}`);
}   

function oneRoundRock()
{
if (playerScore !== 5 && computerScore !== 5)
{
    oneRound('Rock');
}
checkWinner('Rock');
}

function oneRoundPaper()
{
if (playerScore !== 5 && computerScore !== 5)
{
    oneRound('Paper');
}
checkWinner('Paper');
}

function oneRoundScissors()
{
if (playerScore !== 5 && computerScore !== 5)
{
    oneRound('Scissors');
}
checkWinner('Scissors');
}

function checkWinner(x)
{
if (playerScore === 5)
{
    results.innerText = `You Won The Game!!! \nYou chose: ${x}. The computer chose: ${computerChoice}.\nPlayer score: ${playerScore}. Computer score: ${computerScore}`;
    body.appendChild(playAgainB);
    playAgainB.addEventListener('click', resetScore);
}
else if (computerScore === 5)
{
    results.innerText = `You Lost The Game!!! \nYou chose: ${x}. The computer chose: ${computerChoice}.\nPlayer score: ${playerScore}. Computer score: ${computerScore}`;
    body.appendChild(playAgainB);
    playAgainB.addEventListener('click', resetScore);
}
}

function resetScore()
{
    playerScore = 0;
    computerScore = 0;
    results.innerText = 'Choose Rock, Paper or Scissors!';
    body.removeChild(playAgainB);
}