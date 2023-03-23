// A company has determined that its annual profit is typically 23 percent of total sales. Write
// a program that asks the user to enter the projected amount of total sales, then displays the
// profit that will be made from that amount.

const prompt = require("prompt-sync")({ sigint: true });

let amountOTotalSales = prompt("Enter the projected amount of total sales: ");
let profit = (amountOTotalSales*23)/100;

console.log("The projected amount of total sales is: ",amountOTotalSales)
console.log("The profit from projected amount is: ",profit)