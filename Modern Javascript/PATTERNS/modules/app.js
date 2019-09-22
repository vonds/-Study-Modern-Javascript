// Basic structure
// (function () {
//     // Declare private vars and functions

//     return {
//         // Declare public vars and functions
//     }
// })()

// Standard module pattern
const UICtrl = (function () {
    let text = 'Hello Squirrel'

    const changeText = () => {
        const element = document.querySelector('h1')
        element.textContent = text
    }

    return {
        callChangeText: () => {
            changeText()
            console.log(text)
        }
    }
})()
