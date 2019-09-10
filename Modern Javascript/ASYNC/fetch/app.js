const getText = () => {
    fetch('test.txt')
        .then(res => res.test())
        .then(data => {
            if (data.status === 200) {
                document.querySelector('#output').innerHTML = data
            }
        })
        .catch(err => {
            document.querySelector('#output').innerHTML = err
        })
}

document.querySelector('#button1').addEventListener('click', getText)