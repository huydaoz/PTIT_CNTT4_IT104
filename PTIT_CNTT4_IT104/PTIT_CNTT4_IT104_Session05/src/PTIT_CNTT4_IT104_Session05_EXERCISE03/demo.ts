class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  public printInfo(): void {
    console.log(
      `Tên: ${this.name}, Công ty: ${this.company}, SĐT: ${this.phone}`
    );
  }
}
let emp = new Employee("Nguyễn Văn A", "Công ty ABC", "0123456789");

emp.printInfo();
