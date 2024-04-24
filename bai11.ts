abstract class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    abstract makeNoise(): void;
    printName():void{
        console.log(`${this.name}`);    
    }
}
class Cat extends Animal{
    makeNoise():void{
        console.log(`meo meo`); 
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log(`gâu gâu`);  
    }
}

let cat = new Cat(`miu miu`)
cat.printName();
cat.makeNoise();
let dog = new Dog(`chi hua hua`)
dog.printName();
dog.makeNoise();