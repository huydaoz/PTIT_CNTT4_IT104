class BookItem {
  private bookId: number;
  private bookTitle: string;
  private bookAuthor: string;

  constructor(bookId: number, bookTitle: string, bookAuthor: string) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }

  public getId(): number {
    return this.bookId;
  }

  public getTitle(): string {
    return this.bookTitle;
  }

  public setInfo(newTitle: string, newAuthor: string): void {
    this.bookTitle = newTitle;
    this.bookAuthor = newAuthor;
  }

  public getInfo(): string {
    return `ID: ${this.bookId}, Tiêu đề: ${this.bookTitle}, Tác giả: ${this.bookAuthor}`;
  }
}

class LibraryManager {
  private libraryBooks: BookItem[] = [];

  public addBook(newBook: BookItem): void {
    this.libraryBooks.push(newBook);
  }

  public viewBooks(): void {
    this.libraryBooks.forEach((book) => {
      console.log(book.getInfo());
    });
  }

  public updateBookById(
    bookId: number,
    updatedTitle: string,
    updatedAuthor: string
  ): void {
    for (let book of this.libraryBooks) {
      if (book.getId() === bookId) {
        book.setInfo(updatedTitle, updatedAuthor);
        break;
      }
    }
  }

  public searchBooksByTitle(searchKey: string): void {
    this.libraryBooks
      .filter((book) =>
        book.getTitle().toLowerCase().includes(searchKey.toLowerCase())
      )
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
