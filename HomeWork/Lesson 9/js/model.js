"use strict"

let currentId = 5

const data = {
    books: [
        {id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "антиутопія"},
        {id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "фентезі"},
        {id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "фентезі"},
        {id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "пригодницький роман"},
        {id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "фантастика"},
    ],

    add(book) {
        book.id = ++currentId
        this.books.push(book)
    },

    find(id) {
        return this.books.find(book => book.id === id)
    },

    update(id, updatedBook) {
        const book = this.find(id)
        book.title = updatedBook.title
        book.author = updatedBook.author
        book.year = updatedBook.year
        book.genre = updatedBook.genre
    },

    delete(id) {
        const idx = this.books.findIndex(book => book.id === id)
        this.books.splice(idx, 1)
    }
}