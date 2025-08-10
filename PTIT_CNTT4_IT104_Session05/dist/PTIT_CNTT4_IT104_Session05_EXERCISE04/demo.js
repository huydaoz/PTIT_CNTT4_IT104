class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}, Tên: ${this.name}, Năm SX: ${this.year}, Hãng: ${this.company}`);
    }
}
let myVehicle = new Vehicles(101, "Civic", 2020, "Honda");
myVehicle.printInfo();
