abstract class Person{
    name:string
    constructor(name:string){
        this.name = name
    }
    abstract displayInfo():void
}

class Student extends Person{
    id:number
    constructor(name:string, id:number){
        super(name)
        this.id = id
    }
    displayInfo(): void {
        console.log(`${this.name}, ${this.id}`); 
    }
}

class Teacher extends Person{
    subject:string
    constructor(name:string, subject: string){
        super(name)
        this.subject = subject
    }
    displayInfo(): void {
        console.log(`${this.name}, ${this.subject}`);
        
    }
}

let student = new Student(`Trang`,18)
student.displayInfo()
let teacher = new Teacher(`Hi`, `OJT`)
teacher.displayInfo()