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
        logData: () => data,

        addItem: (name, calories) => {
            let ID
            data.items.length > 0 ? ID = data.items[data.items.length - 1].id : ID = 0
            calories = parseInt(calories)
            const item = new Item(ID, name, calories)
            data.items.push(item)
            return item
        },

        getTotalCalories: () => {
            let total = 0
            data.items.forEach(item => total += item.calories)
            return data.totalCalories = total
        },

        getItems: () => data.items
    }
})()

const UICtrl = (function () {

    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }
    return {
        populateItemList: items => {
            items.forEach(item => {
                document.querySelector(UISelectors.itemList).innerHTML += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-edit"></i></a>
                </li>
                `
            })
        },

        addItemList: item => {
            document.querySelector(UISelectors.itemList).style.display = 'block'
            const li = document.createElement('li')
            li.className = 'collection-item'
            li.id = `item-${item.id}`
            li.innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-edit"></i></a>
            `
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },

        showTotalCalories: totalCalories => {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories
        },

        clearEditState: () => {
            document.querySelector(UISelectors.addBtn).style.display = 'inline'
            document.querySelector(UISelectors.updateBtn).style.display = 'none'
            document.querySelector(UISelectors.deleteBtn).style.display = 'none'
            document.querySelector(UISelectors.backBtn).style.display = 'none'
        },

        showEditState: () => {
            document.querySelector(UISelectors.addBtn).style.display = 'none'
            document.querySelector(UISelectors.updateBtn).style.display = 'inline'
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
            document.querySelector(UISelectors.backBtn).style.display = 'inline'
        },

        hideList: () => {
            document.querySelector(UISelectors.itemList).style.display = 'none'
        },

        getInputs: () => {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value,
            }
        },

        getSelectors: () => UISelectors,

        clearInputs: () => {
            document.querySelector(UISelectors.itemNameInput).value = ''
            document.querySelector(UISelectors.itemCaloriesInput).value = ''
        }
    }
})()

const App = (function (ItemCtrl, UICtrl) {
    const loadEventListeners = () => {
        const UISelectors = UICtrl.getSelectors()
        document.querySelector(UISelectors.addBtn).addEventListener('click', addItemSubmit)
        document.querySelector(UISelectors.itemList).addEventListener('click', editItemClick)
    }

    const addItemSubmit = e => {
        const inputs = UICtrl.getInputs()
        if (inputs.name !== '' && inputs.calories !== '') {
            const newItem = ItemCtrl.addItem(inputs.name, inputs.calories)
            UICtrl.addItemList(newItem)
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)
            UICtrl.clearInputs()
        }
        e.preventDefault()
    }

    const editItemClick = e => {
        if (e.target.classList.contains('edit-item')) {

        }
        e.preventDefault()
    }

    return {
        init: () => {
            UICtrl.clearEditState()
            const items = ItemCtrl.getItems()
            items.length === 0 ? UICtrl.hideList() : UICtrl.populateItemList(items)
            loadEventListeners()
        }
    }
})(ItemCtrl, UICtrl)

App.init()