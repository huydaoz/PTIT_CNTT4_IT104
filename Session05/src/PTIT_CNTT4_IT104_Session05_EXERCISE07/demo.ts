class MyBook {
  private id: number;
  private title: string;
  private author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  public getId(): number {
    return this.id;
  }

  public setInfo(title: string, author: string): void {
    this.title = title;
    this.author = author;
  }

  public getInfo(): string {
    return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
  }
}

class MyLibrary {
  private books: MyBook[] = [];

  public addBook(book: MyBook): void {
    this.books.push(book);
  }

  public viewBooks(): void {
    this.books.forEach((book) => console.log(book.getInfo()));
  }

  public updateBookById(id: number, newTitle: string, newAuthor: string): void {
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
