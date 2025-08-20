class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        this.students.forEach((s) => {
            console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter((s) => s.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}
allStudents.push(new Student(1, "Alice"));
allStudents.push(new Student(2, "Bob"));
allStudents.push(new Student(3, "Charlie"));
allStudents.push(new Student(4, "David"));
allStudents.push(new Student(5, "Eve"));
allStudents.push(new Student(6, "Frank"));
const classA = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
const classB = new Classroom();
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Class A:");
classA.showStudents();
console.log("Class B:");
classB.showStudents();
