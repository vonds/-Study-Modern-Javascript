//https://jsonplaceholder.typicode.com/todos/1

const getTodos = async url => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

getTodos('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))