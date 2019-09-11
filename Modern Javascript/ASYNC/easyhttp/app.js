const http = new EasyHttp()
const data = {
    title: 'clean room',
    completed: true
}

const data2 = {
    title: 'I take what\'s mine then take some more',
    completed: true
}

http.put('https://jsonplaceholder.typicode.com/todos/1', data2)
    .then(data => console.log('PUT: ', data))
    .catch(err => console.log(err))


http.get('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log('GET: ', data))
    .catch(err => console.log(err))

http.post('https://jsonplaceholder.typicode.com/todos', data)
    .then(data => console.log('POST: ', data))
    .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('DELETE: ', data))
    .catch(err => console.log(err))