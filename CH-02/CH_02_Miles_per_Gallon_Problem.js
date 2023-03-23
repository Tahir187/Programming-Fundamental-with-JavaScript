// A car's miles-per-gallon (MPG) can be calculated with the following formula:
// MPG = Miles driven / Gallons of gas used
// Write a program that asks the user for the number of miles driven and the gallons of gas
// used. It should calculate the car's MPG and display the result

const prompt = require("prompt-sync")({ sigint: true });

let milesDriven = prompt("Enter the number of miles driven: ");
let gallonOfGas = prompt("Enter the number of gallons of gas used: ");
let MPG = milesDriven / gallonOfGas;

console.log("The car's MPG are: ",MPG);