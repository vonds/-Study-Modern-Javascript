// Define UI variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

const addTask = e => {
    if (taskInput.value === '') {
        alert('Add a task')
    }
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-times"></i>'
    li.appendChild(link)
    taskList.appendChild(li)
    taskInput.value = ''
    e.preventDefault()
}

const removeTask = e => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove()
    }
}

const clearTasks = () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.displey = 'none'
        }
    })
}

// 1
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 2
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 3
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 4
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 5
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 6
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 7
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 8
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textcontent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 9
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

// 10
const filterTasks = e => {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

const loadEventListeners = () => {
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask)
    clearBtn.addEventListener('click', clearTasks)
    filter.addEventListener('keyup', filterTasks)
}

loadEventListeners()






