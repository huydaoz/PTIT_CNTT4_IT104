class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(subject, name) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}
const student = new Student(1, "John");
const teacher = new Teacher("Math", "Jane");
student.displayInfo();
teacher.displayInfo();
