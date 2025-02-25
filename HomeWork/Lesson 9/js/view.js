"use strict"

const booksList = {
    render(listContainer, list) {

        // <section className="book">
        //     <button>Редагувати</button>
        //     <button>Видалити</button>
        //     <h1>1984</h1>
        //     <h3>Джордж Орвелл</h3>
        //     <p>1949</p>
        //     <p>антиутопія</p>
        // </section>

        listContainer.innerHTML = ''
        list.forEach(book => {
            const section = document.createElement('div')
            section.classList.add('book')

            section.insertAdjacentHTML('beforeend', `<button onclick="updateBook(${book.id})">Редагувати</button>`)
            section.insertAdjacentHTML('beforeend', `<button onclick="removeBook(${book.id})">Видалити</button>`)
            section.insertAdjacentHTML('beforeend', `<h1>${book.title}</h1>`)
            section.insertAdjacentHTML('beforeend', `<h3>${book.author}</h3>`)
            section.insertAdjacentHTML('beforeend', `<p>Рік видання: ${book.year}</p>`)
            section.insertAdjacentHTML('beforeend', `<p>Жанр: ${book.genre}</p>`)

            listContainer.appendChild(section)
        })
    }
}