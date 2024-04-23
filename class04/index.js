"use strict";
// // Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 
// //it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.
// function MyFunction(day: number) {
//     switch (day) {
//         case 1:
//             console.log("Monday");
//             return;
//         case 2:
//             console.log("Tuesday");
//             return;
//         case 3:
//             console.log("Wednesday");
//             return;
//         case 4:
//             console.log("Thursday");
//             return;
//         case 5:
//             console.log("Friday");
//             return;
//         case 6:
//             console.log("Weekend");
//             return;
//         default:
//             console.log("Invalid input");
//             return;
//     }
// }
// MyFunction(2);
// //Try making ATM Machine matches pin and account number it it matches then user can 
// //withdraw amount. And if he or she hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately.
// const Atm = (
//     userAccountNumber: number,
//     userPinNumber: number,
//     withdrawAmount: number,
// ) => {
//     const accountNumber = 12345;
//     const pinNumber = 12345;
//     let totalAmount = 10000;
//     if (accountNumber !== userAccountNumber) {
//         console.log("Wrong account number");
//         return;
//     }
//     if (pinNumber !== userPinNumber) {
//         console.log("Wrong PIN");
//         return;
//     }
//     if (withdrawAmount > totalAmount) {
//         console.log("Insufficient balance");
//         return;
//     }
//     totalAmount -= withdrawAmount;
//     console.log(`Withdrawal successful. Total balance: ${totalAmount}. Remaining balance: ${totalAmount - withdrawAmount}`);
// };
// Atm(1245, 12445, 5000);
// // Write a ts program that prints message like "Good Morning" etc depending on time use 
// //hours only for now. Do it with both if else if abd switch statement.
// function userTime(usertime: number) {
//     switch (true) {
//         case usertime >= 6 && usertime < 12:
//             console.log("Good Morning");
//             return;
//         case usertime >= 12 && usertime < 18:
//             console.log("Good Afternoon");
//             return;
//         case usertime >= 18 && usertime < 20:
//             console.log("Good Evening");
//             return;
//         case (usertime >= 20 && usertime <= 23) || (usertime >= 0 && usertime < 6):
//             console.log("Good Night");
//             return;
//         default:
//             console.log("Invalid hour");
//             return;
//     }
// }
// userTime(2);        
// // use by  if else
// const usertime = (usertime1: number) => {
//     if (usertime1 >= 6 && usertime1 <= 12) {
//         console.log("Good Morning");
//     } else if (usertime1 >= 12 && usertime1 <= 18) {
//         console.log("Good Afternoon");
//     } else if (usertime1 >= 18 && usertime1 < 20) {
//         console.log("Good evening");
//     } else if ((usertime1 >= 20 && usertime1 <= 23) || (usertime1 >= 0 && usertime1 <= 6)) {
//                 console.log("Good night");
//     } else {
//         console.log("invalid hour");
//     }
// };
// usertime(7)
// //  Write a program that prints the name of study for a person for instance   middle , matric
// //etc from playgroup to PhD on basis of class number. Do it with both if else if and switch statement 
// const program =(className:number)=>{
// switch (true) {
//     case className >= 1 && className<=2:
//     console.log("Playgroup") 
// return;
// case className >= 2 && className<=5:
//     console.log("primary");
//     return;
//     case className >=6 && className <= 8:
//         console.log("medal")
//    return;
//         case className >= 9 && className <=10:
//         console.log("intermediate");
//         return;
//         case className >= 11 && className <=12:
// return;
// case className >=13 && className <=16:
//     console.log("bachelor")
// return;
// case className >=17 && className <=18:
//    console.log("M phil")
// return; 
//     case className >=19 && className <=20:
// console.log("PHD")
//     return;
// default:
//     console.log("invalid class")
// }}
// program(2);
// // use of if else statements
// const program1 = (className1:number)=>{
// if(className1 >= 1 && className1<=2){
//     console.log("Playgroup") 
// }else if(className1 >= 2 && className1<=5){
//     console.log("primary");
// }else if(className1 >=6 && className1 <= 8){
//     console.log("medal")
// }else if(className1 >= 9 && className1 <=10){
//     console.log("intermediate");
// }else if(className1 >= 11 && className1 <=12){
// }else if(className1 >=13 && className1 <=16){
//     console.log("bachelor")
// }else if(className1 >=17 && className1 <=18){
//    console.log("M phil")
// }else if(className1 >=19 && className1 <=20){
// console.log("PHD")
// }else {
//     console.log("invalid class")
// }
// }
// program1(12);
// //  - Write a TS program that check ms wheather if the number is positive, zero or negative.
// const program2 =(number:number)=>{
// if (number>0){
//     console.log("positive")
// }else if(number<0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }}
// program2(2);
// //Take 5 different numbers and check which on is greatest and then check which one is smallest use separate conditionals  for both scenarios.
// const program3 = (num1: number, num2: number, num3: number, num4: number, num5: number, num6: number) => {
//     let greatest: number;
//     let smallest: number;
//     // Check for greatest number
//     if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6) {
//         greatest = num1;
//     } else if (num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6) {
//         greatest = num2;
//     } else if (num3 > num4 && num3 > num5 && num3 > num6) {
//         greatest = num3;
//     } else if (num4 > num5 && num4 > num6) {
//         greatest = num4;
//     } else {
//         greatest = num5 > num6 ? num5 : num6;
//     }
//     // Check for smallest number
//     if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 && num1 < num6) {
//         smallest = num1;
//     } else if (num2 < num3 && num2 < num4 && num2 < num5 && num2 < num6) {
//         smallest = num2;
//     } else if (num3 < num4 && num3 < num5 && num3 < num6) {
//         smallest = num3;
//     } else if (num4 < num5 && num4 < num6) {
//         smallest = num4;
//     } else {
//         smallest = num5 < num6 ? num5 : num6;
//     }
//     console.log(`The greatest number is: ${greatest}`);
//     console.log(`The smallest number is: ${smallest}`);
// };
// program3(12, 23, 12, 24, 34, 56);
let todoList = ["getup", "wazu", "fajer", "prayer", "breakfast", "office", "work", "Have Lanch", "zuher prayer", "assing office", "aser prayer"];
console.log(todoList.length);
let scondRemoe = todoList.splice(1, 1);
console.log(scondRemoe.length);
