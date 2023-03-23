// 14. Body Mass Index
// Write a program that calculates and displays a person’s body mass index (BMI). The BMI
// is often used to determine whether a person is overweight or underweight for his or her
// height. A person’s BMI is calculated with the following formula:

//             BMI = weight/height^2 * 703

// where weight is measured in pounds and height is measured in inches. The program should
// ask the user to enter his or her weight and height, then display the user’s BMI. The pro-
// gram should also display a message indicating whether the person has optimal weight, is
// underweight, or is overweight. A person’s weight is considered to be optimal if his or her
// BMI is between 18.5 and 25. If the BMI is less than 18.5, the person is considered to be
// underweight. If the BMI value is greater than 25, the person is considered to be overweight

const prompt = require("prompt-sync")({sigint:true});

let weight = prompt("Enter your wieght in Pounds: ");
let height = prompt("Enter your height in Inches: ");
let BMI = weight * 703/ height^2;

console.log("Your weight is: ",weight,"£");
console.log("Your height is: ",height,"In");
console.log("Your BODY MASS INDEX is: ",BMI,"BMI");

if(BMI >= 18.5 && BMI <= 25){
    console.log("You are fit person");
}

else if(BMI < 18.5){
    console.log("You are underweighted person");
}

else if(BMI > 25){
    console.log("You are overweighted person");
}else{console.log("Please enter correct information");}