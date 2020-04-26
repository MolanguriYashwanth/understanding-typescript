//discriminated types
interface Bird {
    type: 'bird',
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;

    }
    console.log('Moving Animal with '+speed);
}

moveAnimal({
    type:'bird',
    flyingSpeed:20
})

//type-casting
// const inputElement = <HTMLInputElement>document.getElementById('user-input')!;
const inputElement = document.getElementById('user-input')! as HTMLInputElement;
inputElement.value = "Sai Yashwanth";


//Index properties
interface ErrorContainer{
    [prop:string]:string;
}
const errorBag:ErrorContainer = {
    email:'Not a valid Email'
}

//function Overloads
type Combinable = string | number;
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:string,b:number):string;
function add(a:number,b:string):string;
function add(a:Combinable,b:Combinable){
    if(typeof a==="string" || typeof b==="string"){
        return a.toString()+b.toString();
    }
    return a+b;
}

let result = add("Sai ","Yashwanth");
result.split(" ")

//Optional Chaining
const fetchedUserData = {
    id:"1",
    name:"Sai Yashwanth",
    job:{
        title:"CEO"
    }
}

console.log(fetchedUserData?.job?.title)

//Nullish coalescing
const userInput = '';

const storeData = userInput ?? 'DEFAULT';

console.log(storeData);