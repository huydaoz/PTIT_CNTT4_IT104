class Vehicles {
  public name: string;
  protected year: number;
  private company: string;
  public readonly id: number;

  constructor(id: number, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }

  public printInfo(): void {
    console.log(
      `ID: ${this.id}, Tên: ${this.name}, Năm SX: ${this.year}, Hãng: ${this.company}`
    );
  }
}
let myVehicle = new Vehicles(101, "Civic", 2020, "Honda");
myVehicle.printInfo();
