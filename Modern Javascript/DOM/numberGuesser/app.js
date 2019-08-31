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
// Assign Ui min and max
minNum.textContent = min
maxNum.textContent = max

// Play again event listener
game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

// Set message
const setMessage = (msg, color) => {
    message.style.color = color
    message.textContent = msg
}

const gameOver = (won, msg) => {
    let color = won === true ? color = 'green' : color = 'red'
    // Disable input
    guessInput.disabled = true
    // Change border color
    guessInput.style.borderColor = color
    // Set text color 
    message.style.color = color
    // Set message
    setMessage(msg)
    // Play Again?
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

// Get winning number
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// Listen for guess
guessBtn.addEventListener('click', e => {
    let guess = parseInt(guessInput.value)

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`)
    }
    // Check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        // Wrong number
        guessesLeft -= 1
        if (guessesLeft === 0) {
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)

        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red'
            // Clear input 
            guessInput.value = ''
            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
})
