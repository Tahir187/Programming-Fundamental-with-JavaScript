// A cookie recipe calls for the following ingredients:
// • 1.5 cups of sugar
// • 1 cup of butter
// • 2.75 cups of flour
// The recipe produces 48 cookies with this amount of the ingredients. Write a program that
// asks the user how many cookies he or she wants to make, then displays the number of cups
// of each ingredient needed for the specified number of cookies.

const prompt = require("prompt-sync")({ sigint: true });


let num_of_cookies = prompt("How many cookies he or she wants to make: ");
let cookies = 48;
let sugar = 1.5;
let butter = 1;
let flour = 2.75;


let total_sugar = (sugar * num_of_cookies)/cookies;
let total_butter = (butter * num_of_cookies)/cookies;
let total_flour = (flour * num_of_cookies)/cookies;

console.log("number of cookies are: ", num_of_cookies);
console.log("total sugar: ", total_sugar);
console.log("total butter: ",total_butter);
console.log("total flour: ", total_flour);