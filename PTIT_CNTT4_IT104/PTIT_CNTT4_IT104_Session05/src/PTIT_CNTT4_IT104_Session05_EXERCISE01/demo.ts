class Vehicle {
  name: string;
  year: number;
  company: string;

  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }
}
let vehicle1 = new Vehicle("Civic", 2020, "Honda");
let vehicle2 = new Vehicle("Camry", 2022, "Toyota");

console.log(vehicle1);
console.log(vehicle2);
