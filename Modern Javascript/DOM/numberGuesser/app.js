const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message')

minNum.textContent = min
maxNum.textContent = max

const showMessage = (msg, color) => {
    message.textContent = msg
    message.style.color = color
}

const gameOver = (won, msg) => {
    won === true ? color = 'green' : color = 'red'
    guessInput.style.borderColor = color
    guessInput.value = ''
    showMessage(msg, color)

    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value)
    if (isNaN(guess) || guess < min || guess > max) {
        return showMessage(`Please add a number between ${min} and ${max}`, 'red')
    }

    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        guessesLeft--
        if (guessesLeft === 0) {
            gameOver(false, `You lost. The correct number was ${winningNum}`)
        } else {
            guessInput.value = ''
            showMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
})

game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})
