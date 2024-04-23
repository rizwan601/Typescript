"use strict";
// var num1:number = 30
// var num2:number = 20
// console.log( "50 ",num1+num2)
// var expression1:number = num1+num2+40-20;
// console.log( "70",expression1);
// var sub:number = num1-num2
// console.log( "10",sub);
// var Mul:number = num1*num2
// console.log("600",Mul)
// var Div:number =  num1/num2
// console.log(Div)
// var rem:number = num1%num2 
// console.log(rem);
// var expression2:number = num1/ num2+2*num2-30;
// console.log(expression2)
// post increament operator 
//  var num1 = 10
// var result:number= 10
// var result01= num1++
// console.log ("10",result01)
//     console.log("10",num1);
// var  num1: number= 10
// var result2:number = ++num1
// console.log("11",result2)
// console.log("10",num1)
// //post decreamebnt operator 
// var num1 = 10
// var result3:number= num1--
// console.log("10",result3)
// console.log("09",num1)
// //pre decreament operator 
// var num1=10
// var result4:number = --num1
// console.log("9",result4)
// console.log("09",num1)
//  Calculate your age based on the current year and your birth year.
// var current_year:number= 2023;
// var brith_year:number = 2004;
// var My_Age = current_year-brith_year;
// console.log("My_Age",My_Age);
//  Write a program that calculates the area of a rectangle using length and width variables.
// var lenth:number= 20;
// var width:number = 14;
// var area_of_a_rectengle = lenth*width;
// console.log("area_of_a_rectengle",area_of_a_rectengle);
// - Write a program that calculates the area of the cube.
// var a:number= 2;
// var area_of_a_cube  = 6*a**2  
// console.log("area_of_a_cube",area_of_a_cube);
// Write a program that calculates the area of a circle.
// var radius:number = 24;
// var area_of_a_circle = Math.PI*radius**2;
// console.log("area_of_a_circle",area_of_a_circle);
// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
// var F:number = 10;
// var Fahrenheit_to_Celsius = (F-32)*5/9;
// console.log("Fahrenheit_to_Celsius",Fahrenheit_to_Celsius);             
// var C:number= 100;
// var Celsius_to_Fahrenheit = C*(9/5)+32;
// console.log("Celsius_to_Fahrenheit",Celsius_to_Fahrenheit);
// - Convert a given number of seconds into minutes and seconds using variables.
// var   given:number = 90;
// var minutes:number =Math.trunc(given/60);
// var seconds:number = (given%60);
// console.log("minutes,",minutes,"second",seconds);
// //Write a program that calculates the percentage.
// var totalvalue:number = 200;           
// var Givenvalue:number = 100;
// var percentage = (Givenvalue/totalvalue*100);
// console.log("percentage", percentage);
// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
// var seconds:number = 90;
// var minutes:number = 60;
// var convet:number = Math.trunc(seconds/minutes)
// var seconds2:number= seconds%minutes
// console.log(`this is minutes ${convet} seconds ${seconds2}`)
//Increment and Decrement Operator:
//- Q1:
// let a= 2;
// let b = ++a * 2; 
//b = 6 
let x = 5;
x--;
// + 2;
console.log(x);
// y = 7
//- Q3 
// let x = 3;
// let y = ++x + x++ + ++x;
// y = 14
//- Q4 
// let m = 2;
// let n = ++m * m++ * --m;
// n = 27
//- Q5
// let a1 = 3;
// let b = 5;
// let result = ++a1 + b-- - a1++ + --b;
// result = 8
//  - Q6
// let m = 2;
// let n = 4;
// let p = m++ + ++n - --m + n--;
// m = 2 ,n = 5,p = 10
//- Q7
// let a1 = 5;
// let b = 3;
// let c = 2;
// let d = 7;
// let result = ++a1 * (b-- + c) / --d;
// a = 6, b = 3, c = 2, d = 6 ,result = 5
//- Q8
// let m = 2;
// let n = 3;
// let o = 4;
// let result = m++ * (--n + m) / (o-- - n);
// // m = 3 , o = 4 , n = 2, result = 5
