// 10. Money Counting Game
// Create a change-counting game that gets the user to enter the number of coins required
// to make exactly one dollar. The program should prompt the user to enter the number of
// pennies, nickels, dimes, and quarters. If the total value of the coins entered is equal to one
// dollar, the program should congratulate the user for winning the game. Otherwise, the
// program should display a message indicating whether the amount entered was more than
// or less than one dollar.

// 100 pennies = 1 dollor
// 20 nickels = 1 dollor
// 10 dimes = 1 dollor
// 4 quarters = 1 dollor

const prompt = require("prompt-sync")({sigint:true});

const PENNY = 0.01;
const NICKEL = 0.05;
const DIME = 0.10;
const QUARTER = 0.25;

const pennie = prompt("Enter number of pennies: ");
const nickel = prompt("Enter number of nickels: ");
const dime = prompt("Enter number of dimes: ");
const quarter = prompt("Enter number of quarters: ");


const pennies = (PENNY * pennie);
const nickels = (NICKEL * nickel);
const dimes = (DIME * dime);
const quarters = (QUARTER * quarter);
const total = (pennies + nickels + dimes + quarters);

console.log("Pennies are: ", pennies);
console.log("Nickels are: ", nickels);
console.log("Dimes are: ", dimes);
console.log("Quarters are: ", quarters);
console.log("Total coins are: ", total);

if(total == 1.00){
    console.log("Congratulation you have won the game!");
}else{
    console.log("You have lost!");
}

if(total < 1.00){
    console.log("Your coins are less than 1.00$");
}else{
    console.log("You coins are more than 1.00$");
}