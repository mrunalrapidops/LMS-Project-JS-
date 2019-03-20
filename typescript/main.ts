export{}
var message = "hello world of type script";
console.log(message);
let isBeginner: Boolean = true;
let total: number = 0;
let name: string= 'mrunal';
let sentence: string=  `My name is ${name}
I am a beginner in Type Script`;
/* console.log(sentence);
let index:string = name.indexOf[0];
 console.log(index); */ 
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string,number] = ['Age',20];
enum color{Red = 5,Green = 6,Blue = 7}//like class
let c: color = color.Green;
//console.log(c);//index in simple array
console.log(c);
let randomValue: any = 10;
randomValue = 'Mrunal';
randomValue = true;// last value print
console.log(randomValue);
let myVariable: unknown = 'Mrunal';
console.log((myVariable as string).toUpperCase());
function hasName(obj: any): obj is {name: string}{/*fun_name*//*para*//*return*/
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name);
}

let multiType: number | boolean;
multiType = 20;
multiType = false; 
console.log(multiType);

function  add (num1: number,num2?: number): number{//return type
    if(num2){
        return num1 + num2 ;
    }else {
        return num1;
    } 
}
console.log(typeof(add (5,6)));
console.log(add(5,6));
console.log(add(5));

//console.log(isBoolean(this.myVariable)); not working
//interface
function fullName (person:{firstname: string,lastname: string}){//object as paramiter
    console.log(`${person.firstname} ${person.lastname}`);
}
let p={
    firstname:'Mrunal',
    lastname:'patadia'
};
fullName(p);
interface person_interface{
    firstname: string;
    lastname: string;
}

function fullName2 (person:person_interface){// paramiter
    console.log(`${person.firstname} ${person .lastname}`);
}
fullName(p);
class Employee{
   public employeeName:String;
    constructor(name: String){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`) 
    }
}
let Emp1 = new Employee ('Mrunal');
console.log(Emp1.employeeName);
Emp1.greet();

//inheritance
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log("manager delegating tasks");
    }
}
let manager1 = new Manager('ABC');
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);