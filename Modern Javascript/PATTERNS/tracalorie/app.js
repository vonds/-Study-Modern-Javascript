const StorageCtrl = (function () {

    return {

    }
})()


const ItemCtrl = (function () {
    const Item = function (id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }


    const data = {
        items: [
            { id: 0, name: 'Steak Dinner', calories: 1200 },
            { id: 1, name: 'Cookie', calories: 400 },
            { id: 2, name: 'Eggs', calories: 300 }
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItems: () => data.items,

        addItem: (name, calories) => {
            let ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0
            }
            calories = parseInt(calories)
            newItem = new Item(ID, name, calories)
            data.items.push(newItem)
            return newItem
        },

        logData: () => data
    }
})()

const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesIntput: '#item-calories'
    }

    return {
        populateItemList: (items) => {
            let html = ''
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="fa fa-edit"></i></a>
                </li>
                `
            })
            document.querySelector(UISelectors.itemList).innerHTML = html
        },

        getItemInput: () => {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesIntput).value
            }
        },

        addListItem: (item) => {
            const li = document.createElement('li')
            li.className = 'collection-item'
            li.id = `item-${item.id}`
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="fa fa-edit"></i></a>
            `
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },

        // 1

        // 2

        // 3

        // 4

        // 5

        // 6

        // 7

        // 8

        // 9

        // 10

        clearInput: () => {
            document.querySelector(UISelectors.itemNameInput).value = ''
            document.querySelector(UISelectors.itemCaloriesInput).value = ''
        },

        // 1

        // 2

        // 3

        // 4

        // 5

        // 6

        // 7

        // 8

        // 9

        // 10

        getSelectors: () => UISelectors
    }
})()

const App = (function (ItemCtrl, UICtrl) {

    const loadEventListeners = () => {
        const UISelectors = UICtrl.getSelectors()
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
    }

    const itemAddSubmit = e => {
        const input = UICtrl.getItemInput()

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories)
            UICtrl.addListItem(newItem)
            // 1

            // 2

            // 3

            // 4

            // 5

            // 6

            // 7

            // 8

            // 9

            // 10

            UICtrl.clearInput()

            // 1

            // 2

            // 3

            // 4

            // 5

            // 6

            // 7

            // 8

            // 9

            // 10
        }

        e.preventDefault()
    }

    return {
        init: () => {
            const items = ItemCtrl.getItems()
            UICtrl.populateItemList(items)
            loadEventListeners()
        }
    }
})(ItemCtrl, UICtrl)


console.log(App.init())