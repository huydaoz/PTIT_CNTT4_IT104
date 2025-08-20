class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log("Diện tích Circle:", circle.calculateArea().toFixed(2));
console.log("Chu vi Circle:", circle.calculatePerimeter().toFixed(2));
const rectangle = new Rectangle(4, 6);
console.log("Diện tích Rectangle:", rectangle.calculateArea());
console.log("Chu vi Rectangle:", rectangle.calculatePerimeter());
