class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`gâu gâu`);
    }
    printName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`meo meo`);
    }
    printName() {
        console.log(this.name);
    }
}
const dog = new Dog("alaska");
const cat = new Cat("doraemon");
dog.makeNoise();
dog.printName();
cat.makeNoise();
cat.printName();
