// Write a program that asks the user to enter the amount of a purchase and the desired
// number of payment instalments. The program should add 5 percent to the amount to get
// the total purchase amount, and then divide it by the desired number of instalments, then
// display messages telling the user the total amount of the purchase and how much each
// instalment will cost

const prompt = require("prompt-sync")({ sigint: true });

let amountOfPurchase = prompt("Enter the amount of purchase: ");
let instalment = prompt("Enter the desired number of payment instalments: ");
let totalPercent = amountOfPurchase * (5/100);
let totalPurchase = amountOfPurchase + totalPercent;
let totalInstalments = totalPurchase / instalment

console.log("The amount of purchasse is: ",amountOfPurchase);
console.log("Instalments are: ",instalment);
console.log("5 percent that will be added to total purchase is: ",totalPercent);
console.log("Your total purchase is: ",totalPurchase);
console.log("Your each instalments cost is: ",totalInstalments);