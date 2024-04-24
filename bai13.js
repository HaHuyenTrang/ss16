"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`${this.name}, ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`${this.name}, ${this.subject}`);
    }
}
let student = new Student(`Trang`, 18);
student.displayInfo();
let teacher = new Teacher(`Hi`, `OJT`);
teacher.displayInfo();
