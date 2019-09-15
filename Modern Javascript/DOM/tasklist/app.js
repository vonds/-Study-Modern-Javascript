const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

const getStorageItems = () => {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    return tasks
}

const getTasks = () => {
    const tasks = getStorageItems()
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(task))
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-times"></i>'
        li.appendChild(link)
        taskList.appendChild(li)
    })
}

const storeTaskInLocalStorage = task => {
    const tasks = getStorageItems()
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = e => {
    if (taskInput.value === '') return alert('Add a task')
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-times"></i>'
    li.appendChild(link)
    taskList.appendChild(li)

    storeTaskInLocalStorage(taskInput.value)

    taskInput.value = ''
    e.preventDefault()
}

const removeTaskFromLocalStorage = taskItem => {
    const tasks = getStorageItems()
    tasks.forEach((task, i) => {
        if (taskItem.textContent === task) {
            tasks.splice(i, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const removeTask = e => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove()
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
}

const clearTasksFromLocalStorage = () => {
    localStorage.clear()
}

const clearTasks = () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    clearTasksFromLocalStorage()
}

const filterTasks = e => {
    const text = e.target.value
    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

const loadEventListeners = () => {
    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask)
    clearBtn.addEventListener('click', clearTasks)
    filter.addEventListener('keydown', filterTasks)
}

loadEventListeners()