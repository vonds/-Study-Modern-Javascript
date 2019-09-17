const btn = document.querySelector('#button')

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

btn.addEventListener('click', loadData)