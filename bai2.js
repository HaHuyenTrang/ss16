"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        console.log(30.000 * this.workingHour);
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        console.log(`10.000.000`);
    }
}
let partime = new PartimeJob("oto", 8);
partime.calculateSalary();
let fulltime = new FulltimeJob("oto");
fulltime.calculateSalary();
