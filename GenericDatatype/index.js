"use strict";
//  Colors[Colors.Red]
let thiscolor = 0 /* Colors.Red */; // const enum acess to value 
console.log(thiscolor);
// let thiscolor1 = Colors[2] //error const enum not acess to index
var Colors1;
(function (Colors1) {
    Colors1[Colors1["Red"] = 0] = "Red";
    Colors1[Colors1["green"] = 1] = "green";
    Colors1[Colors1["blue"] = 2] = "blue";
    Colors1[Colors1["alpha"] = 3] = "alpha";
})(Colors1 || (Colors1 = {}));
let thiscolor2 = Colors1.Red; // simple enum acess value 
console.log(thiscolor2);
let thiscolor3 = Colors1[3]; //  simple enum acess to index and value
var Colors4;
(function (Colors4) {
    Colors4[Colors4["Red"] = 2] = "Red";
    Colors4[Colors4["green"] = 3] = "green";
    Colors4[Colors4["blue"] = 4] = "blue";
    Colors4[Colors4["alpha"] = 4] = "alpha";
})(Colors4 || (Colors4 = {}));
console.log(Colors4[4]);
console.log(Colors4.blue);
let array = [];
let newAdmin = {
    role: 0 /* USERROLE.ADMIN */,
    Name: "Rizwan"
};
let newUser = {
    role: 1 /* USERROLE.USER */,
    Name: "abbas"
};
if (newUser.role == 0 /* USERROLE.ADMIN */) {
    console.log("something ");
}
function swap(arr) {
    return [arr[1], arr[0]];
}
let numb = [1, 3, 24, 334,];
console.log(swap(numb));
console.log(swap(["rizwan", "ramzan"]));
