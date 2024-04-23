"use strict";
// //Assignment for the week is:
// // - Create a function that takes an array, an index, and a value as parameters. Inside the
// //function, use the splice method to insert the value at the specified index in the array.
// // Return the modified array.
// function modifiedArray(array: number[], index: number, value: number){
//   array.splice(index,0,value); 
// return array
// }
// var array:number[] = [1,2,3,4,5,6,7];
// var index:number =6
// var value:number =9
//  var modified = modifiedArray(array, index, value)
// console.log(modified)
//  console.log(array)
//- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
// let cartArray:number[] = [];
// const addItem = (index:number,count:number , items:any[])=>{
// cartArray.splice(index,count, ...items );
// console.log(cartArray)
// }
// let index =0;
// let count = 0;
// let items:string[] = ["a", "b", "c", "d"]
// addItem(index,count,items);
// const removeItem = (index1:number,count1:number,items:any)=>{
//     cartArray.splice(index1,count1,...items);
// console.log(cartArray);
// }
// let  index1= 0;
// let count1 = 1;
//  let removed = removeItem(index1,count1,items);
// let cartArray: string[] = []; // Use string[] instead of number[]
// const addItem = (index: number, count: number, items: string[]) => {
//   // Use spread operator to insert items into the specified index
//   cartArray.splice(index, 0, ...items);
//   console.log(cartArray);
// };
// let index = 0;
// let count = 0;
// let items: string[] = ["a", "b", "c", "d"];
// addItem(index, count, items);
// const removeItem = (index1: number, count1: number, items: string[]) => {
//   // Use splice to remove items from the specified index
//   cartArray.splice(index1, count1, ...items);
//   console.log(cartArray);
// };
// let index1 = 0;
// let count1 = 1;
// removeItem(index1, count1, items); // Removed variable is unnecessary
// const updateItems = (index2:number,count2:number ,items:string[])=>{
//     cartArray.splice(index2,count2,...items);
// console.log(cartArray)
// }
// let index2 = 4;
// let count2 = 1; 
// updateItems(index2,count2,items)
// let cart:string[] = [];
// function addItems(item:string){
// cart.splice(0, 0, item);
// console.log(cart)
// }
// addItems("banana",)
// addItems("orange",)
// addItems("apple",)
// addItems("tomato",)
// function removeItems(index:number, count:number){
//     cart.splice(index, count)
// console.log(cart)
// }
// removeItems(0,1)
// function updateItems( index:number,count:number ,item:string){
// cart.splice(index, count,item)
// console.log(cart)
// }
// updateItems(0,1,"quantity")
// //- Write a program that uses a while loop to print the first 25 integers.
// let i = 0;
// while(i <=25){
//     console.log(i)
//     i++;
// }
// // - Write a program that uses a while loop to print the first 10 even numbers.
// let i1 = 0;
// while(i1 <= 10){
//     console.log(i1)
//     i1 = i1+2    
// }
// // Create a function typescript that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// const calculateFactorial = (n: number) => {
//   if (n < 0 || !Number.isInteger(n)) {
//     throw new Error("Input must be a non-negative integer.");
//   }
//   if (n === 0) {
//     return 1;
//   }
//   let result = 1;
//   let i = 1;
//   while (i <= n) {
//     result *= i;
//     i++;
//   }
//   return result;
// };
// let inputNumber = 5;
// let factorial = calculateFactorial(inputNumber);
// console.log(`The factorial of ${inputNumber} is ${factorial}.`);
// function calculateFactorial(n: number): number {
//     // Check if the input is a non-negative integer
// if (n < 0 || !Number.isInteger(n)) {
//         throw new Error("Input must be a non-negative integer");
//     }
//     // Base case: 0! is 1
//     if (n === 0) {
//         return 1;
//     }
//     // Initialize variables
//     let result = 1;
//     let i = 1;
//     // Use a while loop to calculate the factorial
//     while (i <= n) {
//         result *= i;
//         i++;
//     }
//     return result;
// }
// Example usage:
// const inputNumber = 5;
// const resultFactorial = calculateFactorial(inputNumber);
// console.log(`The factorial of ${inputNumber} is: ${resultFactorial}`);
// // - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
// e
// function removeNegativeNumbers(numbers: number[]): number[] {
//   const filteredArray = numbers.filter(num => num >= 0);
//   return filteredArray;
// }
// const numbersArray: number[] = [1, 2, -3, 4, -5, 6, -7];
// const removedNumbers = removeNegativeNumbers(numbersArray);
// console.log("Original Array:", numbersArray);
// console.log("Array with Negative Numbers Removed:", removedNumbers);
const numbersArray = [1, -2, 3, -4, 5, 6, -7];
const result = [];
for (const num of numbersArray) {
    if (num >= 0) {
        result.push(num);
    }
}
console.log("original array", numbersArray);
console.log("result", result);
// function rem=oveNegativeNumbers(numbers: number[]): number[] {
//     const filteredArray = numbers.filter(num => num >= 0);
//     return filteredArray;
// }
// const numbersArray = [1, -2, 3, -4, 5, -6, 7];
// const resultArray = removeNegativeNumbers(numbersArray);
// console.log(`Original array: ${numbersArray}`);
// console.log(`Array after removing negative numbers: ${resultArray}`);
// // Create a function  that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
// function calculateSum(numbers: number[]): number {
//     // Check if the array is empty
//     if (numbers.length === 0) {
//         throw new Error("Array is empty");
//     }
//     // Initialize variables
//     let sum = 0;
//     let index = 0;
//     // Use a while loop to calculate the sum
//     while (index < numbers.length) {
//         sum += numbers[index];
//         index++;
//     }
//     return sum;
// }
// // Example usage:
// const numbersArray1 = [1, 2, 3, 4, 5];
// const resultSum = calculateSum(numbersArray1);
// console.log(`The sum of the numbers is: ${resultSum}`);
// // - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
// function main() {
//     const temperatures: { Celsius: number, Fahrenheit: number }[] = [];
//     console.log("Enter temperatures in Celsius (type 'done' when finished):");
//     while (true) {
//       const userInput = prompt("Enter temperature in Celsius (type 'done' when finished): ");
//       if (userInput.toLowerCase() === 'done') {
//         break;
//       }
//       const temperatureCelsius = parseFloat(userInput);
//       if (!isNaN(temperatureCelsius)) {
//         const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
//         temperatures.push({ Celsius: temperatureCelsius, Fahrenheit: temperatureFahrenheit });
//       } else {
//         console.log("Invalid input. Please enter a valid number.");
//       }
//     }
//     console.log("\nConverted temperatures:");
//     temperatures.forEach(({ Celsius, Fahrenheit }) => {
//       console.log(`${Celsius}°C = ${Fahrenheit}°F`);
//     });
//   }
//   // Run the program
//   main());
// //Write a program to remove all the odd numbers from an array.
// function removeOddNumbers(numbers: number[]): number[] {
//     const filteredArray = numbers.filter(num => num % 2 === 0);
//     return filteredArray;
// }
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArrayWithoutOddNumbers = removeOddNumbers(originalArray);
// console.log(`Original array: ${originalArray}`);
// console.log(`Array without odd numbers: ${newArrayWithoutOddNumbers}`);
// let array:string[] = ["apple", "orange", "banana", "mango", "peach", ];
// let array2 = array.map((element, index)=>element).filter((element:string)=>element.length === 5)  
// console.log(array2)
// let alphatsArray:string[] =["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
// let vowels:string[] =alphatsArray.map((element, index)=>element).filter((element:string)=>)
