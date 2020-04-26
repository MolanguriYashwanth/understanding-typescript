//decorators
//Factories run in top to bottom order when we have multiple decarators
//Constructor Functions run in bottom to top 
//All decorators get executed when defining a class
//Decorators add some extra meta data
//return values are not supported for parameter and property decorators
function Logger(_: Function) {
    //console.log("Logging");
    //console.log(constructor);
}

@Logger
class Person {
    name = "Sai";
    constructor() {
        // console.log("Create a Person Object");
    }
}

function LoggerFactory(logString: string) {
    return (_: Function) => {
        console.log(logString);
        // console.log(constructor);
    }
}

function createTemplate(template: string, hookId: string) {
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        console.log("Template Rendering")
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                let element = document.getElementById(hookId);
                // const p = new originalConstructor();
                if (element) {
                    element.innerHTML = template;
                    element.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}
@LoggerFactory("Logging Person Object")
@createTemplate('<h1>Sai Yashwanth</h1>', 'app')
class Person1 {
    name = "Sai Yashwanth Molanguri";
    constructor() {
        //  console.log("Create a Person Object");
    }
}
let p1 = new Person1();


function Log(target: any, propertyName: string) {
    console.log("Property Decorator...")
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessory Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);

}
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(p1: number) {
        if (p1 > 0) {
            this._price = p1;
        } else {
            throw new Error("Invalid Price")
        }
    }
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price + tax
    }

}


function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    console.log("originalMethod", originalMethod);
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn
        }
    }
    return adjDescriptor;
}
class Printer {
    message: string = "This works!";

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

let p = new Printer();
let button = document.getElementById("click-button")!;
button.addEventListener('click', p.showMessage)
// let product1 = new Product("KitKat",10)


interface ValidatorConfig {
    [property: string]: {
        [validateProp: string]: string[]
    }
}

const registeredValidator: ValidatorConfig = {};

function RequiredFn(target: any, propertyName: string) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propertyName]: ['required']
    }

    
}

function PostiveNumber(target: any, propertyName: string) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propertyName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidator[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid &&  !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;

            }
        }
    }
    return isValid;
}
class Course {
    @RequiredFn
    title: string;
    @PostiveNumber
    price: number;
    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const customForm = document.querySelector('form')!;

customForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('course-title') as HTMLInputElement;
    const priceEl = document.getElementById('course-price') as HTMLInputElement;

    let title = titleEl.value;
    let price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if(!validate(createdCourse)){
        alert('Entered Values are not valid!');
        return;
    }
    console.log("createdCourse", createdCourse);
      
});