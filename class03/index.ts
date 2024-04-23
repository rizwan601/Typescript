//- Write a program that calculates the percentage. 
// const percentage1 = (givenvalue: number, totalvalue: number) => {
//   var percentage = (givenvalue / totalvalue * 100);
//   console.log("percentage", percentage);
// }

// percentage1(10, 50);

// //- Write a program that calculates the discount for a product based on its price. If the price is above $100,
// //apply a 10% discount; otherwise, apply a 5% discount.


// const percentageCalculator = (productPrice: number) => {
//     let discountCalculate: number;
//     if (productPrice > 100) {
//         discountCalculate = productPrice / 100 * 10; // Calculate 10% discount
//     } else {
//         discountCalculate = productPrice / 100 * 5; // Calculate 5% discount
//     }
//     console.log("Discount:", discountCalculate);
//     let discountedPrice = productPrice - discountCalculate; // Calculate discounted price
//     console.log("Discounted Price:", discountedPrice);
// }

// percentageCalculator(234);

// totalprice(90);

// - Create a program that determines the category of a user-provided age. If the age is 
//between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
// const category = (age: number) => {
//   var category1: string = "child";
//   var category2: string = "Teenager";
//   var category3: string = "Adult";

//   if (age >= 0 && age <= 12) {
//     console.log(category1);
//   } else if (age >= 13 && age <= 19) {
//     console.log(category2);
//   } else {
//     console.log(category3);
//   }
// };

// category(20);

// // - Write a program that takes temperature and check it. If it is cold then suggest the user
// //to wear warm clothes and so on according to the weather.
// const recommendClothing = (temperature: number) => {
//   const COLD_THRESHOLD = 20;

//   const coldWeatherClothes = "Wear warm clothes";
//   const warmWeatherClothes = "Wear light clothes";

//   if (temperature < COLD_THRESHOLD) {
//     console.log(coldWeatherClothes);
//   } else {
//     console.log(warmWeatherClothes);
// }
// };

// recommendClothing(12);


// //Write a program that checks if the given number is  divisible by 3 or 5 or both or not
// //divisible by anyone show output accordingly.
// const checkDivisible = (num1: number) => {
//   if (num1 % 3 == 0 && num1 % 5 == 0) {
//     console.log("The number is divisible by both 3 and 5");
//   } else if (num1 % 3 == 0) {
//     console.log("The number is divisible by 3");
//   } else if (num1 % 5 == 0) {
//     console.log("The number is divisible by 5");
//   } else {
//     console.log("The number is not divisible by both 3 and 5");
//   }
// };

// checkDivisible(23);


// Write a program that checks if the given year is a leap year or not.
// const isLeapYear = (givenYear: number) => {
//   if ((givenYear % 4 == 0 && givenYear % 100 != 0) || givenYear % 400 == 0) {
//     console.log("Yes, it's a leap year");
//   } else {
//     console.log("No, it's not a leap year");
//   }
// };

// isLeapYear(2024);

// // - Develop a prog ram that determines the day of the week. Ask the user for a number (1-7)
// //  and use nested if statements to print the corresponding day's name.
// const dayOfWeek =( user_number:number)=>{

// if(user_number === 1){
//     console.log("Monday");
// }else 
// if(user_number === 2){
//     console.log("Tueaday");

// }else 
// if(user_number === 3){
//     console.log("Wednesday");
// }else 
// if(user_number === 4){
//     console.log("Thursday");
// }else 
// if(user_number ===5){
//     console.log("Friday");

// }else
// if(user_number === 6){console.log("saturday")}
// else if (user_number === 7){
//     console.log("Sunday");
// }else
//  {console.log("wrong number")
                                    
// }
// }
// dayOfWeek(7)
// //- Write a program that takes the number of units consumed by a user if it is greater than 
// // 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 
// //500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.

// const calculateBill = (unitsConsumed: number) => {
//   var percentage = 0;

//   if (unitsConsumed > 500) {
//     percentage = 25;
//   } else if (unitsConsumed > 200) {
//     percentage = 15;
//   } else if (unitsConsumed > 100) {
//     percentage = 10;
//   }

//   const taxAmount = (unitsConsumed * percentage) / 100;
//   const billAmount = unitsConsumed + taxAmount;

//   console.log("Tax Amount:", taxAmount);
//   console.log("Total Bill Amount:", billAmount);
// };

// calculateBill(213);


// // Write a program that tells if the student is pass or fail based on the c greater 
// // than 75%, practical marks should greater than 50% and theory marks should be greater 
// //than 45%  for passing in a semester.
// const checkPass = (attendance: number, practicalMarks: number, theoryMarks: number) => {
//   if (attendance > 75 && practicalMarks > 50 && theoryMarks > 45) {
//     console.log("Congratulations, you have passed!");
//   } else {
//     console.log("Oh no, you have failed.");
//   }
// };

// checkPass(76, 51, 46);

// //  Write a ts program that evaluates the grades of the students:
// //   * 80% or greater, grade A
// // * 70% or greater, grade 
// //  * 60% or greater, grade C
// // * 50% or greater, grade D
// //  * Less than 50% , grade F.
// const calculateGrade = (marks: number) => {
//   if (marks >= 80) {
//     console.log("A");
//   } else if (marks >= 70) {
//     console.log("B");
//   } else if (marks >= 60) {
//     console.log("C");
//   } else if (marks >= 50) {
//     console.log("D");
//   } else {
//     console.log("F");
//   }
// };

// calculateGrade(91);

 
//     var balance = 5000;
//  var withdraw = 4000;
//  if(balance <= 5000){
//     console.log (balance - withdraw)
//  }else{
//     console.log("insufficient balanc")
//  }


//  var  number_of_days = 3;
//  if(number_of_days===1){
//     console.log("january 31")
//  }else if (number_of_days===2){
//     console.log("Febuary 28");

//  }else if(number_of_days ===3){
//    console.log("march 31");
//  }else if(number_of_days ===4){
//    console.log("april 30");
//  }else if(number_of_days ===5){
//    console.log("may 31 ");
//  }else if(number_of_days ===6){
//    console.log("june 30 ");
//  }else if(number_of_days ===7){
//    console.log("july 31");
//  }else if (number_of_days ===8){
// console.log("agust 31 ")   
//  }else if (number_of_;days ===9){
   
//  }



// - Create a program that determines the category of a user-provided age. If the age is 
//between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."



const userCategory= (userName:number) =>{
if(userName > 0 && userName <= 12){
    console.log("userCategory Child")
}else if(userName  >=13 && userName <=19){
    console.log("userCategory  Teenager")
}else {
    console.log("userCategory Adult")
}

}

userCategory(23)

// // - Write a program that takes temperature and check it. If it is cold then suggest the user
// //to wear warm clothes and so on according to the weather.
