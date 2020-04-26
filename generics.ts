//Generics
//A type connected to another type
//Flexibility and type safety

const names: Array<string> = [];

let promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    })
})
//generic functions and constraints

function merge<T extends object, U extends object>(Obj1: T, Obj2: U): T & U {
    return Object.assign(Obj1, Obj2)
}

let newObj = merge({ name: "Sai" }, { age: 20 });

console.log(newObj.name);

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptonText = "Got no elements"
    if (element.length === 1) {
        descriptonText = "Got 1 element";
    } else if (element.length > 1) {
        descriptonText = "Got " + element.length + " elements."
    }
    return [element, descriptonText];
}

console.log(countAndDescribe(["Sports", "Music"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}
console.log(extractAndConvert({ name: "Sai" }, "name"));

//Generic classes

class DataStorage<T> {
    private data : T[]=[];
    addItem(item:T){
        this.data.push(item);
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data]
    }
}

let stringStorage = new DataStorage<string>();

stringStorage.addItem("Sai");
stringStorage.addItem("Yashwanth");
stringStorage.removeItem("Sai");
console.log(stringStorage.getItems());

interface CourseGoal{
    title:string;
    description:string;
    completedDate:Date;
}

function createCourse(title:string,description:string,completionDate:Date):CourseGoal{
    let courseGoal :Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.completedDate = completionDate;
    courseGoal.description = description;

    return courseGoal as CourseGoal;
}