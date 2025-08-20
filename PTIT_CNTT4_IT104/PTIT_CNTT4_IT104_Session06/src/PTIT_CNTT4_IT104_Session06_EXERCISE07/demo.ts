class ClsStudent {
  private stuId: number;
  private stuName: string;

  constructor(stuId: number, stuName: string) {
    this.stuId = stuId;
    this.stuName = stuName;
  }

  getId(): number {
    return this.stuId;
  }

  getName(): string {
    return this.stuName;
  }

  setName(stuName: string): void {
    this.stuName = stuName;
  }
}

let clsAllStudents: ClsStudent[] = [];

class ClsClassroom {
  private classStudents: ClsStudent[];

  constructor() {
    this.classStudents = [];
  }

  showStudents(): void {
    this.classStudents.forEach((s) => {
      console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
    });
  }

  addStudent(student: ClsStudent): void {
    this.classStudents.push(student);
  }

  filterStudent(stuId: number): ClsStudent[] {
    return this.classStudents.filter((s) => s.getId() === stuId);
  }

  addStudentInClass(stuId: number): void {
    const index = clsAllStudents.findIndex((s) => s.getId() === stuId);
    if (index !== -1) {
      this.classStudents.push(clsAllStudents[index]);
      clsAllStudents.splice(index, 1);
    }
  }

  removeStudent(stuId: number): void {
    const index = this.classStudents.findIndex((s) => s.getId() === stuId);
    if (index !== -1) {
      clsAllStudents.push(this.classStudents[index]);
      this.classStudents.splice(index, 1);
    }
  }

  editStudent(stuId: number, newName: string): void {
    const student = this.classStudents.find((s) => s.getId() === stuId);
    if (student) {
      student.setName(newName);
    }
  }
}

clsAllStudents.push(new ClsStudent(1, "Alice"));
clsAllStudents.push(new ClsStudent(2, "Bob"));
clsAllStudents.push(new ClsStudent(3, "Charlie"));
clsAllStudents.push(new ClsStudent(4, "David"));
clsAllStudents.push(new ClsStudent(5, "Eve"));
clsAllStudents.push(new ClsStudent(6, "Frank"));

const clsA = new ClsClassroom();
clsA.addStudentInClass(1);
clsA.addStudentInClass(2);
clsA.addStudentInClass(3);

console.log("Class A trước khi thay đổi:");
clsA.showStudents();

clsA.removeStudent(2);
clsA.editStudent(1, "Alicia");

console.log("Class A sau khi thay đổi:");
clsA.showStudents();
