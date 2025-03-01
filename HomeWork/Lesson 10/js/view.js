"use strict"

const booksList = {
    render(container, books) {
        books.forEach(book => {
            const bookSegment = document.createElement('div')
            bookSegment.classList.add('book-segment')

            bookSegment.insertAdjacentHTML('beforeend',`<button class="button" onclick="editBook(${book.id})">Редагувати</button>`)
            bookSegment.insertAdjacentHTML('beforeend',`<button class="button" onclick="removeBook(${book.id})">Видалити</button>`)
            bookSegment.insertAdjacentHTML('beforeend',`<h1>${book.title}</h1>`)
            bookSegment.insertAdjacentHTML('beforeend',`<h3>${book.author}</h3>`)
            bookSegment.insertAdjacentHTML('beforeend',`<p>${book.year}</p>`)
            bookSegment.insertAdjacentHTML('beforeend',`<p>${book.genre}</p>`)

            container.appendChild(bookSegment)
        })
    }
}