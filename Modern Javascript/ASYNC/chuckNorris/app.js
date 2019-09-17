const getJokes = e => {
    const number = document.querySelector('#number').value
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `	
    http://api.icndb.com/jokes/random/${number}`, true)
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            if (response.type === 'success') {
                let output = ''
                response.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`
                })
                document.querySelector('.jokes').innerHTML = output
            }
        }
    }
    xhr.send()
    e.preventDefault()
}

document.querySelector('.get-jokes').addEventListener('click', getJokes)