"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(`meo meo`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(`gâu gâu`);
    }
}
let cat = new Cat(`miu miu`);
cat.printName();
cat.makeNoise();
let dog = new Dog(`chi hua hua`);
dog.printName();
dog.makeNoise();
