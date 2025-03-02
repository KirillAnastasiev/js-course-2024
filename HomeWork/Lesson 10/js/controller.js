let editId = null

/////// form elements ///////
const form = document.querySelector('#book-form')

/////// form elements ///////
const bookTitle = document.querySelector('#book-title')
const bookAuthor = document.querySelector('#book-author')
const bookYear = document.querySelector('#book-year')
const bookGenre = document.querySelector('#book-genre')
const elementsForValidation = document.querySelectorAll('[data-validate="true"]')

/////// books list container ///////
const bookListContainer = document.querySelector('#book-list')

/////// event listeners ///////
elementsForValidation.forEach(element => {
    element.addEventListener('change', onChangeHandler)
})
form.addEventListener('submit', onSubmitHandler)

render()

/////// functions ///////
function onChangeHandler(event) {
    const element = event.target
    validate(element)
}

function onSubmitHandler(event) {
    event.preventDefault()
    elementsForValidation.forEach(element => validate(element))
    const invalidElements = document.querySelectorAll('.invalid')
    if (invalidElements.length === 0) {
        const book = {}
        book.title = bookTitle.value
        book.author = bookAuthor.value
        book.year = bookYear.value
        book.genre = bookGenre.value

        if (editId) {
            book.id = editId
            data.update(editId, book)
            editId = null
        } else {
            data.add(book)
        }
        clearForm()
        render()
    }
}

function validate(element) {
    for (let key in validators) {
        if (validators.hasOwnProperty(key) && typeof validators[key] === 'object') {
            if (element.dataset.hasOwnProperty(key)) {
                const validator = validators[key]
                const isValid = validators.validate(element, validator.errorMessage, validator.isValid)
                if (!isValid) return
            }
        }
    }
}

function render() {
    bookListContainer.innerHTML = ''
    booksList.render(bookListContainer, data.getBooks())
}

function clearForm() {
    bookTitle.value = ''
    bookAuthor.value = ''
    bookYear.value = ''
    bookGenre.value = ''
}

function removeBook(id) {
    data.remove(id)
    render()
}

function editBook(id) {
    editId = id
    const book = data.find(id)
    bookTitle.value = book.title
    bookAuthor.value = book.author
    bookYear.value = book.year
    bookGenre.value = book.genre
}