/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores = [0, 0],
    roundScore = 0,
    activePlayer = 0


const diceEl = document.querySelector('.dice'),
    score0 = document.querySelector('#score-0'),
    score1 = document.querySelector('#score-1'),
    current0 = document.querySelector('#current-0'),
    current1 = document.querySelector('#current-1'),
    players = document.querySelector(`#current-${activePlayer}`)

diceEl.style.display = 'none'
score0.textContent = 0
score1.textContent = 0
current0.textContent = 0
current0.textContent = 0

const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1
    players.textContent = dice
    diceEl.style.display = 'block'
    diceEl.src = `dice-${dice}.png`
    if (dice !== 1) {
        roundScore += dice
        players.textContent = roundScore
    } else {
        nextPlayer()
    }
}

const holdTotalScore = () => {
    scores[activePlayer] += roundScore
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
    if (scores[activePlayer] >= 20) {
        document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!'
        diceEl.style.displaye = 'none'
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
    } else {
        nextPlayer()
    }
}

const nextPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    current0.textContent = 0
    current1.textContent = 0
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    diceEl.style.display = 'none'
}


document.querySelector('.btn-roll').addEventListener('click', rollDice)
document.querySelector('.btn-hold').addEventListener('click', holdTotalScore)