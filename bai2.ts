abstract class Job{
    type:string
    constructor(type:string){
        this.type = type
    }
    abstract calculateSalary():void;
    printType():void{
        console.log(`${this.type}`); 
    }
}

class PartimeJob extends Job{
    workingHour: number
    constructor(type:string,workingHour: number){
        super(type)
        this.workingHour = workingHour
    }
    calculateSalary(): void {
        console.log( 30.000 * this.workingHour);    
    }
}

class FulltimeJob extends Job{
    constructor(type:string){
        super(type)
    }
    calculateSalary(): void {
        console.log(`10.000.000`);
        
    }
}

let partime = new PartimeJob("oto",8)
partime.calculateSalary()
let fulltime = new FulltimeJob("oto")
fulltime.calculateSalary()