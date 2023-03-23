// A customer in a store is purchasing five items. Write a program that asks for the price of
// each item, then displays the subtotal of the sale, the amount of sales tax, and the total.
// Assume the sales tax is 7 percent.


let item_1 = 45;
let item_2 = 50;
let item_3 = 65;
let item_4 = 75;
let item_5 = 95;

let subTotal = item_1 + item_2 + item_3 + item_4 + item_5;
let salesTax = subTotal*(7/100);
let total = salesTax + subTotal;

console.log("Sub Total of items is: ",subTotal);
console.log("Sales tax is: ",salesTax);
console.log("Your total bill is: ",total)