class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}, Công ty: ${this.company}, SĐT: ${this.phone}`);
    }
}
let emp = new Employee("Nguyễn Văn A", "Công ty ABC", "0123456789");
emp.printInfo();
