class BookItem {
    constructor(bookId, bookTitle, bookAuthor) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
    }
    getId() {
        return this.bookId;
    }
    getTitle() {
        return this.bookTitle;
    }
    setInfo(newTitle, newAuthor) {
        this.bookTitle = newTitle;
        this.bookAuthor = newAuthor;
    }
    getInfo() {
        return `ID: ${this.bookId}, Tiêu đề: ${this.bookTitle}, Tác giả: ${this.bookAuthor}`;
    }
}
class LibraryManager {
    constructor() {
        this.libraryBooks = [];
    }
    addBook(newBook) {
        this.libraryBooks.push(newBook);
    }
    viewBooks() {
        this.libraryBooks.forEach((book) => {
            console.log(book.getInfo());
        });
    }
    updateBookById(bookId, updatedTitle, updatedAuthor) {
        for (let book of this.libraryBooks) {
            if (book.getId() === bookId) {
                book.setInfo(updatedTitle, updatedAuthor);
                break;
            }
        }
    }
    searchBooksByTitle(searchKey) {
        this.libraryBooks
            .filter((book) => book.getTitle().toLowerCase().includes(searchKey.toLowerCase()))
            .forEach((book) => console.log(book.getInfo()));
    }
}
let bookOne = new BookItem(201, "Lập trình C++", "Nguyễn Văn A");
let bookTwo = new BookItem(202, "Java nâng cao", "Trần Văn B");
let bookThree = new BookItem(203, "Python Machine Learning", "Lê Văn C");
let bookFour = new BookItem(204, "Lập trình HTML", "Phạm Thị D");
let myLibraryManager = new LibraryManager();
myLibraryManager.addBook(bookOne);
myLibraryManager.addBook(bookTwo);
myLibraryManager.addBook(bookThree);
myLibraryManager.addBook(bookFour);
myLibraryManager.searchBooksByTitle("lập trình");
