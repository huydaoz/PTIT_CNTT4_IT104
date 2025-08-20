class Employee {
  public name: string;
  protected company: string;
  private phone: number;
  constructor(name: string, company: string, phone: number) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo() {
    console.log(
      `Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`
    );
  }
  getPhone() {
    return this.phone;
  }
}

class Manager extends Employee {
  teamSize: number;
  constructor(name: string, company: string, phone: number, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }
  printInfo() {
    console.log(
      `Name: ${this.name}, Company: ${
        this.company
      }, Phone: ${this.getPhone()}, Team Size: ${this.teamSize}`
    );
  }
}

const employee1 = new Employee("HUY", "riki", 1234567890);
employee1.printInfo();

const manager1 = new Manager("Luffy", "One peach", 9876543210, 15);
manager1.printInfo();
