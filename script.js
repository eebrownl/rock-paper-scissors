function getRandomInt(max) {
    return Math.floor(Math.random()* max);
}

let randomInt = getRandomInt(3)

function computerThrow() {
    if (randomInt === 0) {
        return 'rock';
    } else if (randomInt ===1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function game (playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection ==='scissors')||(playerSelection ==="scissors" && computerSelection ==='rock')) {
        alert('You lose');
    } else if (playerSelection === computerSelection) {
        alert("It's a tie")
    } else {alert('You win!');}
}

let computerSelection = computerThrow();
console.log(computerSelection)
let input = prompt('Rock, paper or scissors?');
let playerSelection = input.toLowerCase();
console.log(playerSelection)

game(playerSelection, computerSelection);
