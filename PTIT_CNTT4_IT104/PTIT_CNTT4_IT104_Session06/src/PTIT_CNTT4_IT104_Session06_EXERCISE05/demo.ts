interface changeSpeed {
  speedUp(amount: number): void;
  slowDown(amount: number): void;
  stop(): void;
}

class Vehicle implements changeSpeed {
  private speed: number;

  constructor() {
    this.speed = 0;
  }

  speedUp(amount: number): void {
    this.speed += amount;
    console.log(`Tốc độ tăng lên ${this.speed}`);
  }

  slowDown(amount: number): void {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`Tốc độ giảm xuống ${this.speed}`);
  }

  stop(): void {
    this.speed = 0;
    console.log(`Tốc độ là ${this.speed}`);
  }
}

const car = new Vehicle();
car.speedUp(50);
car.slowDown(20);
car.stop();
