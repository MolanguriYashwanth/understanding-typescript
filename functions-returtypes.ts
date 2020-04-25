function add(n1:number,n2:number){
    return n1+n2;
}
function printResult(result:number){
    console.log('Result is '+result);
}
function addAndHandle(a:number,b:number,cb:(n:number)=>void){
    const result= a+b;
    cb(result);
}
printResult(add(5,6));

let combinedValues:(a:number,b:number)=>number;
combinedValues = add;
console.log(combinedValues(6,5));

addAndHandle(10,20,(result)=>{
console.log(result);
});