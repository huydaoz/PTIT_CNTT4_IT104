let StaffMembers = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeld: "EMP001",
    department: "Kế toán",
};
function printfStaflnfo(staff) {
    console.log(`Nhân viên: ${staff.name}(${staff.age} tuổi), Mã nhân viên: ${staff.employeeld} - Phòng: ${staff.department} `);
}
printfStaflnfo(StaffMembers);
