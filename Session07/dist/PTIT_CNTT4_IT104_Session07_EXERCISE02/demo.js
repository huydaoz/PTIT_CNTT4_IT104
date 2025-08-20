class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed = this.speed - 10;
    }
    speedUp() {
        this.speed = this.speed + 10;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, ID: ${this.id}, Gear: ${this.gear}`);
    }
}
const bicycle = new Bicycle("BMX", 20, 1, 3);
bicycle.speedUp();
bicycle.showSpeed();
bicycle.slowDown();
bicycle.showSpeed();
bicycle.showInfo();
