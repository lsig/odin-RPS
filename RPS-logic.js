
function computerPlay()  {
    const select = Math.ceil(Math.random() * 3);
    if (select === 1) {
        return 'Rock'
    } else if (select === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelect = playerSelection.toLowerCase() 
    const computerSelect = computerSelection.toLowerCase()
    if (playerSelect === computerSelect) {
        return 'It\'s a tie';
    } else if (playerSelect === 'rock' && computerSelect === 'scissors' 
    || playerSelect === 'paper' && computerSelect === 'rock' 
    || playerSelect === 'scissors' && computerSelect === 'paper') {
        return `You win! ${playerSelect} wins ${computerSelect}`;
    } else {
        return `You lose! ${computerSelect} wins ${playerSelect}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSel = input();
        const computerSel = computerPlay();
        console.log(playRound(playerSel, computerSel));
    }
}

function input() {
     let playerSel = prompt('Select rock, paper or scissors');
     while (!(playerSel.toLowerCase() === 'rock' 
     || playerSel.toLowerCase() === 'paper' 
     || playerSel.toLowerCase() === 'scissors')) {
         playerSel = prompt('Invalid! choose rock, paper or scissors');
     }
     return playerSel;
}

game();