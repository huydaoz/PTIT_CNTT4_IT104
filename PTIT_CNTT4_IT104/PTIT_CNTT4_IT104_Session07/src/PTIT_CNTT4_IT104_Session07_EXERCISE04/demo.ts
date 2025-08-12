abstract class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo() {
    console.log(this.name);
  }
}

class Student extends Person {
  public id: number;
  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }
  displayInfo() {
    console.log(`Student ID: ${this.id}, Name: ${this.name}`);
  }
}
class Teacher extends Person {
  subject: string;
  constructor(subject: string, name: string) {
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
