// Basic structure
// (function () {
//     // Declare private vars and functions

//     return {
//         // Declare public vars and functions
//     }
// })()

// Standard module pattern
// const UICtrl = (function () {
//     let text = 'Hello Squirrel'

//     const changeText = () => {
//         const element = document.querySelector('h1')
//         element.textContent = text
//     }

//     return {
//         callChangeText: () => {
//             changeText()
//             console.log(text)
//         }
//     }
// })()

// Reveling Module Pattern
const ItemCtrl = (function () {
    let data = []

    function add(item) {
        data.push(item)
        console.log(`${item.name} added...`)
    }

    function get(id) {
        return data.find(item => {
            return item.id === id
        })
    }

    return {
        add: add,
        get: get
    }
})()


ItemCtrl.add({ id: 1, name: 'Soup' })
ItemCtrl.add({ id: 2, name: 'Cucumbers' })
ItemCtrl.add({ id: 3, name: 'Mangos' })
ItemCtrl.add({ id: 4, name: 'Pineapples' })
console.log(ItemCtrl.get(4))

