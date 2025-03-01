"use strict"

const data = {
    books: [
        {id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "антиутопія"},
        {id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "фентезі"},
        {id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "фентезі"},
        {id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "пригодницький роман"},
        {id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "фантастика"},
    ],
    currentId: 5,

    add(book) {
        book.id = ++this.currentId
        this.books.push(book)
    },

    find(id) {
        return this.books.find(book => book.id === id)
    },

    update(id, newVal) {
        const index = this.books.findIndex(book => book.id === id)
        this.books[index] = newVal
    },

    remove(id) {
        const index = this.books.findIndex(book => book.id === id)
        this.books.splice(index, 1)
    },

    getBooks() {
        return this.books
    }
}