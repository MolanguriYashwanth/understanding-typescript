//Type Script Inference
// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// } = {
//     name:"Sai Yashwanth",
//     age:24,
//     hobbies:['Sports',"Watching Animes"],
//     role:[2,"Admin"]
// }
// person.role.push("Next");
// let favoriteActivities : string [];
// favoriteActivities = ["Sports"];
// console.log(person.role.length);

let favoriteActivities : any [];
favoriteActivities = ["Sports"];
enum Role {ADMIN='ADMIn',AUTHOR=1,READ_ONLY};
const person= {
    name:"Sai Yashwanth",
    age:24,
    hobbies:['Sports',"Watching Animes"],
    role:Role.ADMIN
}
if(person.role===Role.ADMIN){
    console.log(person.name)
}