let userInput : unknown;

let userName:string;

userInput=5;
userInput="Sai";

if(typeof userInput==="string"){
    userName=userInput;

}

function generateError(message:string,code:number):never{
    throw {message:message,errorCode:code}
}

console.log(generateError("Some errro",401));
