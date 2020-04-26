// type Admin = {
//     name:string,
//     privilage:string[]
// };

// type Employee = {
//     name:string,
//     startDate:Date;
// }

// type ElevatedEmployee = Admin & Employee;
interface Admin{
    name:string;
    privilage:string[];
}
interface Employee{
    name:string;
     startDate:Date;
}

//Intersection types
interface ElevatedEmployee extends Admin,Employee{
}

let el:ElevatedEmployee = {
    name:"Sai",
    privilage:["create-server"],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//type gaurds

function add(a:Combinable,b:Combinable){

    if(typeof a==="string" || typeof b==="string"){
        return a.toString()+b.toString();
    }
    return a+b;
}

type unKnownEmployee = Employee | Admin;

function printEmployeeInformation(emp:unKnownEmployee){

    if('privilage' in emp){
        console.log('Privilages ' + emp.privilage);
    }

    if('startDate' in emp){
        console.log('startDate ' + emp.startDate);
    }
}

printEmployeeInformation(el);

class Car{
    drive(){
        console.log('Driving...');
    }
}

class Truck{
    drive(){
        console.log("Driving a Truck...");
    }
    loadCargo(){
        console.log("Loading Cargo");
    }
}

type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function useVehilcle(v:Vehicle){
    if(v instanceof Truck){
        v.loadCargo();
    }
}

useVehilcle(v1);
useVehilcle(v2);