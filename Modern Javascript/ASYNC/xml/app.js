const loadData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.txt', true)
    xhr.onload = () => {
        if (xhr.status === 200) {
            document.querySelector('#output').textContent = xhr.responseText
        }

    }
    xhr.send()
}

document.querySelector('#button').addEventListener('click', loadData)