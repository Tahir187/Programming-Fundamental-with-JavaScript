// Write a program that calculates the total amount of a meal purchased at a restaurant. The
// program should ask the user to enter the charge for the food, then calculate the amounts
// of a 18 percent tip and 7 percent sales tax. Display each of these amounts and the total

let chargeOFFood = 350;
let tip = chargeOFFood * (18/100);
let tax = chargeOFFood * (7/100);
let total = chargeOFFood + tip + tax;

console.log("The charge of food is: ",chargeOFFood);
console.log("The tip of waiter is: ",tip);
console.log("The tax on food: ",tax.toFixed(2));
console.log("Your total bill is: ",total)