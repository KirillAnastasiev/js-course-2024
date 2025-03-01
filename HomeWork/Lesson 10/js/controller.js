let editId = null

/////// form elements ///////
const bookTitle = document.querySelector('#book-title')
const bookAuthor = document.querySelector('#book-author')
const bookYear = document.querySelector('#book-year')
const bookGenre = document.querySelector('#book-genre')
const submitButton = document.querySelector('#submit')

/////// books list container ///////
const bookListContainer = document.querySelector('#book-list')

/////// event listeners ///////
submitButton.addEventListener('click', event => {
    event.preventDefault()

    /////// validate required ///////
    validate(bookTitle, 'Введіть назву книги', () => checkRequired(bookTitle))
    validate(bookAuthor, 'Введіть автора', () => checkRequired(bookAuthor))
    validate(bookYear, 'Введіть рік видання', () => checkRequired(bookYear))
    validate(bookGenre, 'Введіть жанр', () => checkRequired(bookGenre))

    /////// validate year ///////
    validate(bookYear, 'Введене значення не відповідає шаблону', () => checkPattern(bookYear))
    validate(bookYear, 'Значення нижче за мінімальне', () => checkMinValue(bookYear))
    validate(bookYear, 'Значення вище за максимальне', () => checkMaxValue(bookYear))

    /////// validate book title duplicates ///////
    validate(bookTitle, 'Книга вже є у списку', () => checkDuplicates(bookTitle))

    const invalidElements = document.querySelectorAll('.invalid')
    if (invalidElements.length === 0) {
        const book = {
            title: bookTitle.value,
            author: bookAuthor.value,
            year: bookYear.value,
            genre: bookGenre.value
        }
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
})

bookTitle.addEventListener('change', () => validate(bookTitle, 'Введіть назву книги', () => checkRequired(bookTitle)))
bookAuthor.addEventListener('change', () => validate(bookAuthor, 'Введіть автора', () => checkRequired(bookAuthor)))
bookYear.addEventListener('change', () => validate(bookYear, 'Введіть рік видання', () => checkRequired(bookYear)))
bookGenre.addEventListener('change', () => validate(bookGenre, 'Введіть жанр', () => checkRequired(bookGenre)))
bookYear.addEventListener('change', () => validate(bookYear, 'Введене значення не відповідає шаблону', () => checkPattern(bookYear)))
bookYear.addEventListener('change', () => validate(bookYear, 'Значення нижче за мінімальне', () => checkMinValue(bookYear)))
bookYear.addEventListener('change', () => validate(bookYear, 'Значення вище за максимальне', () => checkMaxValue(bookYear)))
bookTitle.addEventListener('change', () => validate(bookTitle, 'Книга вже є у списку', () => checkDuplicates(bookTitle)))

render()

/////// functions ///////
function clearForm() {
    bookTitle.value = ''
    bookAuthor.value = ''
    bookYear.value = ''
    bookGenre.value = ''
}

function render() {
    bookListContainer.innerHTML = ''
    booksList.render(bookListContainer, data.getBooks())
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

function validate(element, errorMessage, predicate) {
    const errorLabel = document.querySelector(`#${element.dataset.errorLabel}`)
    errorLabel.textContent = errorMessage

    element.classList.remove('valid')
    element.classList.remove('invalid')
    errorLabel.style.display = 'none'

    if (typeof predicate === 'function' && predicate()) {
        element.classList.add('valid')
    } else {
        element.classList.add('invalid')
        errorLabel.style.display = 'inline'
    }
}

function checkRequired(element) {
    const required = element.dataset.required === 'true'
    if (!required) return true

    return element.value.trim().length > 0
}

function checkPattern(element) {
    const value = element.value
    const regex = new RegExp(element.dataset.pattern)
    return regex.test(value)
}

function checkDuplicates(element) {
    const duplicatesAllowed = element.dataset.duplicatesAllowed === 'true'
    if (duplicatesAllowed) return true

    const property = element.name
    const value = element.value
    const isBookInList = data.getBooks().some(book => book[property] === value)
    return !isBookInList
}

function checkMinValue(element) {
    const minValue = +element.dataset.minValue
    const currentValue = +element.value
    return currentValue >= minValue
}

function checkMaxValue(element) {
    const maxValue = +element.dataset.maxValue
    const currentValue = +element.value
    return currentValue <= maxValue
}