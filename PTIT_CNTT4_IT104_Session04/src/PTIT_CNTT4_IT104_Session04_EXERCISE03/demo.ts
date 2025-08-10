interface Student {
  name: string;
  age: number;
  email: string;
}
let studentss: Student = {
  name: "huy",
  age: 18,
  email: "huy@gmail.com",
};
function printf(students: Student) {
  console.log(
    `Tên tôi là: ${students.name}, tôi ${students.age} tuổi và email của tôi là ${students.email}`
  );
}
printf(studentss);
