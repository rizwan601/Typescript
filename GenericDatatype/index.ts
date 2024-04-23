// Enum
const enum Colors {Red, green, blue, alpha}
//  Colors[Colors.Red]
let thiscolor = Colors.Red; // const enum acess to value 
console.log(thiscolor)
// let thiscolor1 = Colors[2] //error const enum not acess to index

enum Colors1 {Red, green, blue, alpha}
let thiscolor2 = Colors1.Red; // simple enum acess value 
console.log(thiscolor2);
let thiscolor3 = Colors1[3]; //  simple enum acess to index and value
enum Colors4 {Red = 2, green = 3, blue, alpha=4}
console.log(Colors4[4])  
console.log(Colors4.blue)
    

let array:number[] =[]
const enum USERROLE {ADMIN,USER}
let  newAdmin = {
    role:USERROLE.ADMIN,
    Name:"Rizwan"
}
let newUser = {
    role:USERROLE.USER,
    Name:"abbas"


}

if(newUser.role==USERROLE.ADMIN ){
        console.log("something ")
}
   


// generics data type 

function swap<T>(arr:T[]):T[]{
    return [arr[1], arr[0]]
}

let numb:number[] = [1,3,24,334,]
console.log(swap(numb))
console.log(swap(["rizwan","ramzan"]))
console.log(swap([true,false]))

// interface data types
interface StudentTypeC{
    rollno:number;
    uni:string;
}
let newObj:StudentTypeC = {
    rollno:1,
    uni: "NTU",
}

type A = number | string
var anyVar:A[] =[1232];

type StudentTypeV ={
    uni:string
}
type StudenTypeA = {
    email: string
}

