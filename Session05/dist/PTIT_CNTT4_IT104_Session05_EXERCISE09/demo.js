class SBook {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(t) {
        this.title = t;
    }
    setAuthor(a) {
        this.author = a;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}
class SLibrary {
    constructor() {
        this.list = [];
    }
    add(b) {
        this.list.push(b);
    }
    view() {
        this.list.forEach((b) => console.log(b.getInfo()));
    }
    search(t) {
        this.list
            .filter((b) => b.getTitle().toLowerCase().includes(t.toLowerCase()))
            .forEach((b) => console.log(b.getInfo()));
    }
    update(id, t, a) {
        const b = this.list.find((b) => b.getId() === id);
        if (b) {
            b.setTitle(t);
            b.setAuthor(a);
        }
    }
    remove(id) {
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
