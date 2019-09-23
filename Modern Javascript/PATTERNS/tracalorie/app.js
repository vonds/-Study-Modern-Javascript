// Storage Controller
const StorageCtrl = (function () {

    return {

    }
})()


// Item Controller
const ItemCtrl = (function () {
    const Item = function (id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }

    // Data Structure / State
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
        getItems: () => {
            return data.items
        },

        logData: () => {
            return data
        }
    }
})()

// UI Controller

const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list'
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
        }
    }
})()

// App Controller
const App = (function (ItemCtrl, UICtrl) {
    return {
        init: () => {
            const items = ItemCtrl.getItems()
            UICtrl.populateItemList(items)
        }
    }
})(ItemCtrl, UICtrl)

App.init()

