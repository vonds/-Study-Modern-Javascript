class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author,
            this.isbn = isbn
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='delete'>X</a></td>
        `
        list.appendChild(row)
    }

    removeBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    showAlert(message, className) {
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form)
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000)
    }

    clearFields() {
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }
}

class Store {
    static getBooks() {
        let books
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static displayBooks() {
        const books = Store.getBooks()
        books.forEach(book => {
            const ui = new UI
            ui.addBookToList(book)
        })
    }

    static addBook(book) {
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static deleteBook(isbn) {
        const books = Store.getBooks()
        books.forEach((book, i) => {
            if (book.isbn === isbn) {
                books.splice(i, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks)

document.querySelector('#book-form').addEventListener('submit', e => {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value
    const book = new Book(title, author, isbn)
    const ui = new UI()
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        ui.showAlert('Book added!', 'success')
        ui.addBookToList(book)
        Store.addBook(book)
        ui.clearFields()
    }
    e.preventDefault()
})

document.querySelector('#book-list').addEventListener('click', e => {
    const ui = new UI()
    ui.showAlert('Book removed', 'success')
    ui.removeBook(e.target)
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent)
})