const loadCustomer = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'customer.json', true)
    xhr.onload = function() {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText)
            const output = `
                <ul>
                    <li>ID: ${customers.id}</li>
                    <li>Name: ${customers.name}</li>
                    <li>Age: ${customers.age}</li>
                    <li>Company: ${customers.company}</li>
                </ul>
            `
            document.querySelector('#customers').innerHTML = output
        }
    }
    xhr.send()
}

const loadCustomers = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'customers.json', true)
    xhr.onload = function() {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText)
            let output
            customers.forEach(customer => {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Age: ${customer.age}</li>
                    <li>Company: ${customer.company}</li>
                </ul>
            `
            })
            document.querySelector('#customers').innerHTML = output
        }
    }
    xhr.send()
}

document.querySelector('#button1').addEventListener('click', loadCustomer)
document.querySelector('#button2').addEventListener('click', loadCustomers)