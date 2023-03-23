// One pound is equivalent to 0.454 kilograms. Write a program that asks the user to enter
// the mass of an object in pounds and then calculates and displays the mass of the object in
// kilograms

const prompt = require("prompt-sync")({ sigint: true });

let massOfObject = prompt("Enter the mass of an object in pounds: ");
let kg = massOfObject * 0.454;

console.log("Mass of an object in pound is: ",massOfObject,"£");
console.log("Mass of an object in Kilograms is: ",kg);