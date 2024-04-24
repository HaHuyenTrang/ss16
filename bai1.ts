abstract class Shapee {
    protected name:string;
    constructor(name:string){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    abstract getSize():void;
}
class Rectangle1 extends Shapee {
    width:number;
    height:number;
    constructor(width:number, height:number, name:string){
        super(name)
        this.width = width;
        this.height = height;
    }
    getSize():void{
        console.log(`width: ${this.width} height: ${this.height}`);
        
    }
}
const rectangle = new Rectangle1( 5, 10,"tang gờ le");
console.log("Name:", rectangle.getName()); 
rectangle.getSize();
