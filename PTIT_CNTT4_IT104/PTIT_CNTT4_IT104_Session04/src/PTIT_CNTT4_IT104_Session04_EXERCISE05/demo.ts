type Person = {
  name: string;
  age: number;
};
type Employee = {
  employeeld: string;
  department: string;
};

type StaffMember = Person & Employee;

let StaffMembers: StaffMember = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeld: "EMP001",
  department: "Kế toán",
};

function printfStaflnfo(staff: StaffMember): void {
  console.log(
    `Nhân viên: ${staff.name}(${staff.age} tuổi), Mã nhân viên: ${staff.employeeld} - Phòng: ${staff.department} `
  );
}
printfStaflnfo(StaffMembers);
