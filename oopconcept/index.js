"use strict";
//// object orinted programming 
//  < Classes, Function overloading, function overiding> 
// //four pollar pf oop
// inheritance
//Encapsilation
// Abstracttion
// Polumorphism
class Laptop {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    startLaptop() {
        console.log("Starting Laptop");
    }
}
var laptop = new Laptop("Dell", 200000);
console.log(laptop);
