class Students {
    private id:number
    private name:string
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

}
class Classroom{
    private students: Students[]=[];
    constructor(){
        this.students = []
    }
       addStudent(students: Students): void {
        this.students.push(students);
    }

    showStudents(): void {
    }

}