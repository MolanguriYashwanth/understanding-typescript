//An Abstract class can have concrete methods and properties defined in it
abstract class Department{
    // public name:string;
    // private id:string;
    protected employees:string[]=[];
    constructor(public name:string,protected readonly id:string){
        // this.name = n;
    }
    static PI ="3.14";
    static createEmployee(name:string){
        return{name:name};
    }
    abstract describe(this:Department):void;
    addEmployee(emp:string){
        this.employees.push(emp);
    }
    printEmployees(){
        console.log(`length ${this.employees.length}`);
        // console.log("employees "+ this.employees)
        console.log(this.employees)
    }
}

class ITDeparment extends Department{
    admins:string[];
    constructor(id:string, admins:string[]) {
        super('IT',id);
        this.admins = admins;
    }
    describe(){
        console.log('IT Department with id ',this.id)
    }
}

//if we want to have only one instance of a class
class AccountingDepartment extends Department{
    private lastReport:string;
    private static instance:AccountingDepartment;
    static getInstance(){
        if(AccountingDepartment.instance){
            return AccountingDepartment.instance
        }
        return new AccountingDepartment("2",[]);
    }
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    describe(){
        console.log('Accounting Department with id ',this.id)
    }
    set mostRecentReport(value:string){
        if(!value){
            throw new Error("Pass valid args");
        }
        this.addReport(value);
    }
    private constructor(id:string,private reports:string[]){
        super('Accounting',id);
        this.lastReport = reports[0];
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports(){
        console.log(this.reports);
    }
    addEmployee(name:string){
        if(name==="Sai"){
            return;
        }
        this.employees.push(name);
    }
}

const it = new ITDeparment("1",["Sai"]);
it.addEmployee("Sai Yashwanth");
it.addEmployee("Sam");
it.printEmployees();
it.describe();

//console.log(it);

//const accounting = new AccountingDepartment("2",[]);;
const accounting = AccountingDepartment.getInstance();
accounting.addReport("Something went Wrong");
accounting.printReports();
accounting.addEmployee("Ram");
accounting.mostRecentReport = "Sham";
accounting.describe();
//console.log(accounting.mostRecentReport)
//console.log(Department.PI);
let employee1 = Department.createEmployee("Emp1");
console.log(employee1);
//console.log(accounting);