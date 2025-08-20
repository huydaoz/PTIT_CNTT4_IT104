class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tốc độ tăng lên ${this.speed}`);
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Tốc độ giảm xuống ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`Tốc độ là ${this.speed}`);
    }
}
const car = new Vehicle();
car.speedUp(50);
car.slowDown(20);
car.stop();
