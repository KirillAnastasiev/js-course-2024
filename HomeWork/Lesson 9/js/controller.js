"use strict"

const bookListContainer = getDomElementById('#book-list')
const bookForm = getDomElementById('#book-form')

// inputs
const inputTitle = getDomElementById('#input-title')
const inputAuthor = getDomElementById('#input-author')
const inputYear = getDomElementById('#input-year')
const inputGenre = getDomElementById('#input-genre')

const clearForm = () => {
    inputTitle.value = ''
    inputAuthor.value = ''
    inputYear.value = ''
    inputGenre.value = ''
}

let editId = null
const render = () => booksList.render(bookListContainer, data.books)

const addBook = () => {
    const title = inputTitle.value
    const author = inputAuthor.value
    const year = inputYear.value
    const genre = inputGenre.value

    data.add(title, author, year, genre)
    clearForm()
}

const removeBook = id => {
    data.delete(id)
    render()
}

const updateBook = id => {
    const book = data.find(id)

    editId = book.id
    inputTitle.value = book.title
    inputAuthor.value = book.author
    inputYear.value = book.year
    inputGenre.value = book.genre
}

bookForm.addEventListener('submit', e => {
    e.preventDefault()

    let book = {
        title: inputTitle.value,
        author: inputAuthor.value,
        year: inputYear.value,
        genre: inputGenre.value
    }

    if (editId) {
        data.update(editId, book)
        editId = null
    } else {
        data.add(book)
    }

    clearForm()
    render()
})

render()
