class LibBook {
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

class LibMember {
  id: number;
  name: string;
  contact: string;
  lendedBooks: LibLendedBook[];
  status: string;

  constructor(id: number, name: string, contact: string, status: string) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.lendedBooks = [];
    this.status = status;
  }
}

class LibLendedBook {
  memberId: number;
  bookId: number;
  dueDate: Date;

  constructor(memberId: number, bookId: number, dueDate: Date) {
    this.memberId = memberId;
    this.bookId = bookId;
    this.dueDate = dueDate;
  }
}

class LibLibrary {
  books: LibBook[];
  members: LibMember[];

  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(newBook: LibBook): void {
    this.books.push(newBook);
  }

  showBooks(): void {
    this.books.forEach((bookItem) => {
      console.log(
        `ID: ${bookItem.id}, Title: ${bookItem.title}, Author: ${bookItem.author}, Stock: ${bookItem.stock}, Status: ${bookItem.status}`
      );
    });
  }

  registerMember(
    memberId: number,
    memberName: string,
    memberContact: string
  ): void {
    const newMember = new LibMember(
      memberId,
      memberName,
      memberContact,
      "Active"
    );
    this.members.push(newMember);
  }

  blockMember(memberId: number): void {
    const targetMember = this.members.find((m) => m.id === memberId);
    if (targetMember) {
      targetMember.status = "Blocked";
    }
  }

  showMembers(): void {
    this.members.forEach((memberItem) => {
      console.log(
        `ID: ${memberItem.id}, Name: ${memberItem.name}, Contact: ${memberItem.contact}, Status: ${memberItem.status}`
      );
    });
  }
}

const mainLibrary = new LibLibrary();

mainLibrary.addBook(
  new LibBook(1, "doraemon", "Monkey D Luffy", 5, "Available")
);
mainLibrary.addBook(new LibBook(2, "one piece", "oda", 3, "Available"));
mainLibrary.addBook(
  new LibBook(3, "naruto shipuden", "uchihahaha", 2, "Available")
);

mainLibrary.registerMember(1, "huy", "huy@gmail.com");
mainLibrary.registerMember(2, "duy", "duy@gmail.com");
mainLibrary.registerMember(3, "tiến", "tien@gmail.com");

mainLibrary.blockMember(2);

mainLibrary.showBooks();
console.log("Members:");
mainLibrary.showMembers();
