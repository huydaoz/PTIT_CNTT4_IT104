class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Type: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new ParttimeJob("Part-time", 120);
const fulltime = new FulltimeJob("Full-time");
parttime.printType();
console.log("Salary:", parttime.calculateSalary());
fulltime.printType();
console.log("Salary:", fulltime.calculateSalary());
