class MyBook {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}
class MyLibrary {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        this.books.forEach((book) => console.log(book.getInfo()));
    }
    updateBookById(id, newTitle, newAuthor) {
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setInfo(newTitle, newAuthor);
                break;
            }
        }
    }
}
let b1 = new MyBook(101, "Lập trình C", "Nguyễn Văn A");
let b2 = new MyBook(102, "Java cơ bản", "Trần Văn B");
let lib = new MyLibrary();
lib.addBook(b1);
lib.addBook(b2);
lib.viewBooks();
lib.updateBookById(102, "Java Nâng Cao", "Phạm Văn D");
lib.viewBooks();
