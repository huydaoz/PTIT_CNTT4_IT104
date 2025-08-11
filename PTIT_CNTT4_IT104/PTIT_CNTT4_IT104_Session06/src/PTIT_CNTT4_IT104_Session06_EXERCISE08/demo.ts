class Book {
  id: number;
  title: string;
  author: string;
  stock: number;
  status: string;

  constructor(
    id: number,
    title: string,
    author: string,
    stock: number,
    status: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.stock = stock;
    this.status = status;
  }
}

class Member {
  id: number;
  name: string;
  contact: string;
  lendedBooks: LendedBook[];
  status: string;

  constructor(id: number, name: string, contact: string, status: string) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.lendedBooks = [];
    this.status = status;
  }
}

class LendedBook {
  memberId: number;
  bookId: number;
  dueDate: Date;

  constructor(memberId: number, bookId: number, dueDate: Date) {
    this.memberId = memberId;
    this.bookId = bookId;
    this.dueDate = dueDate;
  }
}

class Library {
  books: Book[];
  members: Member[];

  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  showBooks(): void {
    this.books.forEach((b) => {
      console.log(
        `ID: ${b.id}, Title: ${b.title}, Author: ${b.author}, Stock: ${b.stock}, Status: ${b.status}`
      );
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
