const getText = () => {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            document.querySelector('#output').innerHTML = data
        })
        .catch(err => {
            document.querySelector('#output').innerHTML = err
        })
}

const getJson = () => {
    fetch('user.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                document.querySelector('#output').innerHTML += `
                        <li>${user.id}</li>
                        <li>${user.name}</li>
                        <li>${user.lastName}</li>
                    `
            })
        })
        .catch(err => {
            document.querySelector('#output').innerHTML = err
        })
}

const getExternal = () => {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                document.querySelector('#output').innerHTML += `
                    <li>${user.login}</li>
                `
            })
        })
        .catch(err => {
            document.querySelector('#output').innerHTML = err
        })
}


document.querySelector('#button1').addEventListener('click', getText)
document.querySelector('#button2').addEventListener('click', getJson)
document.querySelector('#button3').addEventListener('click', getExternal)