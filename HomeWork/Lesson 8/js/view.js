const booksList = {
    render(container, books) {
        books.forEach(book => {
            const bookList = document.createElement('div')
            bookList.classList.add('book')

            bookList.insertAdjacentHTML('beforeend', `<h1>${book.title}</h1>`)
            bookList.insertAdjacentHTML('beforeend', `<h3>${book.author}</h3>`)
            bookList.insertAdjacentHTML('beforeend', `<p>Рік видання: ${book.year}</p>`)
            bookList.insertAdjacentHTML('beforeend', `<p>Жанр: ${book.genre.toLowerCase()}</p>`)

            container.appendChild(bookList)
        })
    }
}