function getRandomInt(max) {
    return Math.floor(Math.random()* max);
}

const rockClick = document.querySelector('.rock');
const paperClick = document.querySelector('.paper');
const scissorClick = document.querySelector('.scissors')
const result = document.querySelector('.result')

rockClick.addEventListener('click', function(){
    let randomInt = getRandomInt(3)
    
    if (randomInt ===0) {
        result.style.backgroundColor = 'gray'
        result.textContent = "It's a tie"
    } else if (randomInt === 1) {
        result.style.backgroundColor = 'fireBrick'
        result.textContent = "You're a loser"
    } else {
        result.style.backgroundColor = 'goldenrod'
        result.textContent = "You win!!!"
    }
});

paperClick.addEventListener('click', function(){
    let randomInt = getRandomInt(3)
    
    if (randomInt === 1) {
        result.style.backgroundColor = 'gray'
        result.textContent = "It's a tie"
    } else if (randomInt === 2) {
        result.style.backgroundColor = 'fireBrick'
        result.textContent = "You're a loser"
    } else {
        result.style.backgroundColor = 'goldenrod'
        result.textContent = "You win!!!"
    }
});

scissorClick.addEventListener('click', function(){
    let randomInt = getRandomInt(3)
    
    if (randomInt === 2) {
        result.style.backgroundColor = 'gray'
        result.textContent = "It's a tie"
    } else if (randomInt === 0) {
        result.style.backgroundColor = 'fireBrick'
        result.textContent = "You're a loser"
    } else {
        result.style.backgroundColor = 'goldenrod'
        result.textContent = "You win!!!"
    }
});
