"use strict";
class Shapee {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle1 extends Shapee {
    constructor(width, height, name) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`width: ${this.width} height: ${this.height}`);
    }
}
const rectangle = new Rectangle1(5, 10, "tang gờ le");
console.log("Name:", rectangle.getName());
rectangle.getSize();
