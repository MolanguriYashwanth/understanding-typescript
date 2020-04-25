//Interfaces are use to define structure of an object
//An interface can only have method and property definition but not actual concrete methods
//Can be used as function types 

// type addFn = (a:number,b:number) => number;
interface addFn{
    (a:number,b:number):number;
}
let add : addFn;

add = (n1:number,n2:number)=> {
    return n1+n2;
}
interface Named {
    readonly name?:string;
    outputName?:string;
}
interface Greatable extends Named{
    greet(phrase:string):void;
}

class Person implements Greatable{
    name?:string;
    age:number=30;
    constructor(n?:string){
        if(n){
            this.name=n;
        }
    }
    greet(phrase:string){
        if(this.name){
            console.log(phrase + " "+this.name);
        }else{
            console.log(phrase);
        }
    }
} 
let user1:Greatable;
user1= new Person();

user1.greet("This is");
console.log(user1);

let user2:Greatable;
user2= new Person("Sai");

user2.greet("This is");
console.log(user2);