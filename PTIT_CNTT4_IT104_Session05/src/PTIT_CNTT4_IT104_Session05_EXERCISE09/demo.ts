class SBook {
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

  public getTitle(): string {
    return this.title;
  }

  public setTitle(t: string): void {
    this.title = t;
  }

  public setAuthor(a: string): void {
    this.author = a;
  }

  public getInfo(): string {
    return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
  }
}

class SLibrary {
  private list: SBook[] = [];

  public add(b: SBook): void {
    this.list.push(b);
  }

  public view(): void {
    this.list.forEach((b) => console.log(b.getInfo()));
  }

  public search(t: string): void {
    this.list
      .filter((b) => b.getTitle().toLowerCase().includes(t.toLowerCase()))
      .forEach((b) => console.log(b.getInfo()));
  }

  public update(id: number, t: string, a: string): void {
    const b = this.list.find((b) => b.getId() === id);
    if (b) {
      b.setTitle(t);
      b.setAuthor(a);
    }
  }

  public remove(id: number): void {
    this.list = this.list.filter((b) => b.getId() !== id);
  }
}

let sb1 = new SBook(1, "Lập trình C", "Nguyễn Văn A");
let sb2 = new SBook(2, "Java cơ bản", "Trần Văn B");
let sb3 = new SBook(3, "Python nâng cao", "Phạm Văn C");

let slib = new SLibrary();
slib.add(sb1);
slib.add(sb2);
slib.add(sb3);

slib.view();
console.log("----");
slib.search("Java");
console.log("----");
slib.update(2, "Java Nâng Cao", "Nguyễn Văn D");
slib.view();
console.log("----");
slib.remove(1);
slib.view();
