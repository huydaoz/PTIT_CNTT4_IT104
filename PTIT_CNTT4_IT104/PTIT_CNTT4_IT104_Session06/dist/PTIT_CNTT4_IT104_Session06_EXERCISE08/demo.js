class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((b) => {
            console.log(`ID: ${b.id}, Title: ${b.title}, Author: ${b.author}, Stock: ${b.stock}, Status: ${b.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "doraemon", "Monkey D Luffy", 5, "Available");
const book2 = new Book(2, "one piece", "oda", 3, "Available");
const book3 = new Book(3, "naruto shipuden", "uchihahaha", 2, "Available");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
