const StorageCtrl = (function () {

    return {
        storeItem: item => {
            const items = StorageCtrl.getItemsFromStorage()
            items.push(item)
            StorageCtrl.setStorage(items)
        },

        getItemsFromStorage: () => {
            let items = []
            localStorage.getItem('items') === null ? items = [] : items = JSON.parse(localStorage.getItem('items'))
            return items
        },

        updateItemStorage: updatedItem => {
            const items = StorageCtrl.getItemsFromStorage()
            items.forEach((item, index) => {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem)
                }
            })
            StorageCtrl.setStorage(items)
        },

        setStorage: items => {
            localStorage.setItem('items', JSON.stringify(items))
        },

        deleteItemFromStorage: id => {
            const items = StorageCtrl.getItemsFromStorage()
            items.forEach((item, index) => {
                if (id === item.id) {
                    items.splice(index, 1)
                }
            })
            StorageCtrl.setStorage(items)
        },

        clearAllItemsFromStorage: () => {
            localStorage.clear()
        }
    }
})()


const ItemCtrl = (function () {
    const Item = function (id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }


    const data = {
        items: StorageCtrl.getItemsFromStorage(),
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

        getItemById: id => {
            let found = null
            data.items.forEach(item => {
                if (item.id === id) found = item
            })
            return found
        },

        getTotalCalories: () => {
            let total = 0
            data.items.forEach(item => total += item.calories)
            data.totalCalories = total
            return data.totalCalories
        },

        updateItem: (name, calories) => {
            calories = parseInt(calories)
            let found = null
            data.items.forEach(item => {
                if (item.id === data.currentItem.id) {
                    item.name = name
                    item.calories = calories
                    found = item
                }
            })
            return found
        },

        deleteItem: id => {
            const ids = data.items.map(item => item.id)
            const index = ids.indexOf(id)
            data.items.splice(index, 1)
        },

        clearAllItems: () => {
            data.items = []
        },

        setCurrentItem: item => {
            data.currentItem = item
        },

        getCurrentItem: () => {
            return data.currentItem
        },

        logData: () => data
    }
})()

const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    return {
        populateItemList: (items) => {
            let html = ''
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-edit"></i></a>
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
                <a href="#" class="secondary-content"><i class="edit-item fa fa-edit"></i></a>
            `
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },

        updateListItem: item => {
            let listItems = document.querySelectorAll(UISelectors.listItems)
            listItems = Array.from(listItems)
            listItems.forEach(listItem => {
                const itemId = listItem.getAttribute('id')
                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-edit"></i></a>
                    `
                }
            })
        },

        deleteListItem: id => {
            const itemId = `#item-${id}`
            const item = document.querySelector(itemId)
            item.remove()
        },

        clearInput: () => {
            document.querySelector(UISelectors.itemNameInput).value = ''
            document.querySelector(UISelectors.itemCaloriesInput).value = ''
        },

        addItemToForm: () => {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
            UICtrl.showEditState()
        },

        hideList: () => {
            document.querySelector(UISelectors.itemList).style.display = 'none'
        },

        removeItems: () => {
            let listItems = document.querySelectorAll(UISelectors.listItem)
            listItems = Array.from(listItems)
            listItems.forEach(item => {
                item.remove()
            })
        },

        showTotalCalories: totalCalories => {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories
        },

        clearEditState: () => {
            UICtrl.clearInput()
            document.querySelector(UISelectors.updateBtn).style.display = 'none'
            document.querySelector(UISelectors.deleteBtn).style.display = 'none'
            document.querySelector(UISelectors.backBtn).style.display = 'none'
            document.querySelector(UISelectors.addBtn).style.display = 'inline'
        },

        showEditState: () => {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline'
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
            document.querySelector(UISelectors.backBtn).style.display = 'inline'
            document.querySelector(UISelectors.addBtn).style.display = 'none'
        },

        getSelectors: () => UISelectors
    }
})()

const App = (function (ItemCtrl, StorageCtrl, UICtrl) {

    const loadEventListeners = () => {
        const UISelectors = UICtrl.getSelectors()
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
        document.addEventListener('keypress', e => e.keyCode === 13 || e.which === 13 ? e.preventDefault() : true)
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick)
    }

    const itemAddSubmit = e => {
        const input = UICtrl.getItemInput()

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories)
            UICtrl.addListItem(newItem)
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)
            StorageCtrl.storeItem(newItem)
            UICtrl.clearInput()
        }
        e.preventDefault()
    }

    const itemEditClick = e => {
        if (e.target.classList.contains('edit-item')) {
            const listId = e.target.parentNode.parentNode.id
            const listIdArr = listId.split('-')
            const id = parseInt(listIdArr[1])
            const itemToEdit = ItemCtrl.getItemById(id)
            ItemCtrl.setCurrentItem(itemToEdit)
            UICtrl.addItemToForm()
        }
        e.preventDefault()
    }

    const itemUpdateSubmit = e => {
        const input = UICtrl.getItemInput()
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories)
        UICtrl.updateListItem(updatedItem)
        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.showTotalCalories(totalCalories)
        StorageCtrl.updateItemStorage(updatedItem)
        UICtrl.clearEditState()
        e.preventDefault()
    }

    const itemDeleteSubmit = e => {
        const currentItem = ItemCtrl.getCurrentItem()
        ItemCtrl.deleteItem(currentItem.id)
        UICtrl.deleteListItem(currentItem.id)
        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.showTotalCalories(totalCalories)
        StorageCtrl.deleteItemFromStorage(currentItem.id)
        UICtrl.clearEditState()
        e.preventDefault()
    }

    const clearAllItemsClick = () => {
        ItemCtrl.clearAllItems()
        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.showTotalCalories(totalCalories)
        UICtrl.removeItems()
        StorageCtrl.clearAllItemsFromStorage()
        UICtrl.hideList()
    }

    return {
        init: () => {
            UICtrl.clearEditState()
            const items = ItemCtrl.getItems()
            items.length === 0 ? UICtrl.hideList() : UICtrl.populateItemList(items)
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)
            loadEventListeners()
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl)


console.log(App.init())