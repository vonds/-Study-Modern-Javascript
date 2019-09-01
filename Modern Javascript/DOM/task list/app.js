const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

const storeTasksInLocalStorage = task => {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const getTasks = () => {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
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

    storeTasksInLocalStorage(taskInput.value)

    taskInput.value = ''
    e.preventDefault()
}

const removeTask = e => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove()
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
}

const removeTaskFromLocalStorage = taskItem => {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task, i) => {
        if (taskItem.textContent === task) {
            tasks.splice(i, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const clearTasks = () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    clearTasksFromLocalStorage()
}

const clearTasksFromLocalStorage = () => {
    localStorage.clear()
}

const filterTasks = e => {
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text) != -1) {
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
    filter.addEventListener('keyup', filterTasks)
}

loadEventListeners()