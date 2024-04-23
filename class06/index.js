"use strict";
// Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5
//it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.
function myFunction(num1) {
    switch (num1) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}
myFunction(1);
