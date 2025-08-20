class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangles extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
const rect = new Rectangles("Rectangle A", 10, 5);
console.log("Name:", rect.getName());
rect.getSize();
