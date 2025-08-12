abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeNoise(): void;
  abstract printName(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise(): void {
    console.log(`gâu gâu`);
  }
  printName(): void {
    console.log(this.name);
  }
}
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise(): void {
    console.log(`meo meo`);
  }
  printName(): void {
    console.log(this.name);
  }
}

const dog = new Dog("alaska");
const cat = new Cat("doraemon");

dog.makeNoise();
dog.printName();
cat.makeNoise();
cat.printName();
