const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3

// UI Elements 
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Set message
const setMessage = (msg, color) => {
    message.textContent = msg
    message.style.color = color
}

const gameOver = (won, msg) => {
    let color
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true
    guessInput.style.borderColor = color
    setMessage(msg, color)

    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}


// 10
const gameOver = (won, msg) => {
    let color
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true
    guessInput.style.borderColor = color
    setMessage(msg, color)

    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

guessBtn.addEventListener('click', e => {
    let guess = parseInt(guessInput.value)
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        guessesLeft -= 1
        if (guessesLeft === 0) {
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        } else {
            guessInput.value = ''
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
})


game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})
