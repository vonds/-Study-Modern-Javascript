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
        items: [],
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

        getTotalCalories: () => {
            let total = 0
            data.items.forEach(item => total += item.calories)
            data.totalCalories = total
            return data.totalCalories
        },

        logData: () => data
    }
})()

const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',
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
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },

        addListItem: item => {
            document.querySelector(UISelectors.itemList).style.display = 'block'
            const li = document.createElement('li')
            li.className = 'collection-item'
            li.id = `item-${item.id}`
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="fa fa-edit"></i></a>
            `
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },

        clearInput: () => {
            document.querySelector(UISelectors.itemNameInput).value = ''
            document.querySelector(UISelectors.itemCaloriesInput).value = ''
        },

        hideList: () => {
            document.querySelector(UISelectors.itemList).style.display = 'none'
        },

        showTotalCalories: totalCalories => {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories
        },

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
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)
            UICtrl.clearInput()
        }

        e.preventDefault()
    }

    return {
        init: () => {
            const items = ItemCtrl.getItems()
            items.length === 0 ? UICtrl.hideList() : UICtrl.populateItemList(items)
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)
            loadEventListeners()
        }
    }
})(ItemCtrl, UICtrl)


console.log(App.init())