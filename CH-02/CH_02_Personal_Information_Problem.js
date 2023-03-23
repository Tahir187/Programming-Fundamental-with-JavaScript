// Write a program that displays the following information:
// • Your name
// • Your address, with city, state, and ZIP
// • Your telephone number
// • Your college major

const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("Enter your name: ");
let address = prompt("Enter your address with city name, state, and ZIP Code: ");
let phoneNumber = prompt("Enter your phone number: ");
let uni = prompt("Enter your college major: ");

console.log("My name is:",name);
console.log("My address is: ",address)
console.log("my Phone number is: ",phoneNumber)
console.log("I'm graduated from: ",uni)