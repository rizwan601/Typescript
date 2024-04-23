import inquirer from "inquirer";
import chalk from "chalk";
import countries from "./countries.json" assert {type:"json"} 
// use of chalk in typescript
//  set background color
console.log(chalk.bgRed("Welcome to"))
// set text color 
// for (let index = 0; index < countries.length; index++) {
//     let element = countries[index];
//     console.log( " This country name"+ chalk.black.bgYellow.bold (element.name)+" This country code"+ chalk.black.bgBlue.bold (element.code));
// }
for (let index = 0; index < countries.length; index++) {
    let element = countries[index];
    if(element.name.slice(0,1) === "P" ){
        console.log(element)
    }
    
}
// let array:number[] = [3,2,5,3,3,5,4,5,4,3,6]
// let sliced =array.slice(0,3)
// console.log(sliced)