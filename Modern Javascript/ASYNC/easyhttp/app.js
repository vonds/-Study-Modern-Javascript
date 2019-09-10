const http = new EasyHttp()

http.get('https://jsonplaceholder.typicode.com/todos/1', (err, response) => {
    if (err) {
        console.log(err)
    } else {
        console.log(response)
    }

})