class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public getTitle(): string {
    return this.title;
  }

  public getInfo(): string {
    return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public viewBooks(): void {
    this.books.forEach((book) => console.log(book.getInfo()));
  }

  public searchByTitle(title: string): void {
    this.books
      .filter((book) =>
        book.getTitle().toLowerCase().includes(title.toLowerCase())
      )
      .forEach((book) => console.log(book.getInfo()));
  }
}

let book1 = new Book("Lập trình C", "Nguyễn Văn A");
let book2 = new Book("Java cơ bản", "Trần Văn B");
let book3 = new Book("Học TypeScript", "Lê Văn C");
let book4 = new Book("Python nâng cao", "Phạm Văn D");
let book5 = new Book("Cấu trúc dữ liệu", "Hoàng Văn E");

let myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

myLibrary.viewBooks();
console.log("Kết quả tìm kiếm:");
myLibrary.searchByTitle("java");
