import inquirer from "inquirer";
// console.log("fast")
// async function uploadUser(){
//     var result =  await inquirer.prompt([{
//         type:"number",
//         name:"num1",
//         message:"Enter num1"
//     }])
//     // console.log("second")  
//    if(result.num1 >33)
//    var result  = await inquirer.prompt([{
//         type:"number",
//         name:"num2",
//         message:"Enter num2"
//     }])
//    if(result.num>100)
//     var result  = await inquirer.prompt([{
//         type:"number",
//         name:"num3",
//         message:"Enter num3" 
//     }])
// }
// uploadUser()
// console.log("Third")
var result = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter num1"
    }]);
if (result.num1 > 33 && result.num1 < 50) {
    console.log("E");
}
else if (result.num1 > 50 && result.num1 < 60) {
    console.log("D");
}
else if (result.num1 > 60 && result.num1 < 65) {
    console.log("C");
}
else if (result.num1 > 65 && result.num1 < 70) {
    console.log("B");
}
else if (result.num1 > 70 && result.num1 < 80) {
    console.log("A");
}
else if (result.num1 > 80 && result.num1 < 100) {
    console.log("+A");
}
else if (result.num1 < 33) {
    console.log("F");
}
else {
    console.log("wrong number");
}
