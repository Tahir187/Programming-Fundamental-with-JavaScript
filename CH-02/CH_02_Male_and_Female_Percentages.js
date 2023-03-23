// Write a program that asks the user for the number of males and the number of females regis-
// tered in a class. The program should display the percentage of males and females in the class.
// Hint: Suppose there are 8 males and 12 females in a class. There are 20 students in the
// class. The percentage of males can be calculated as 8 ÷ 20 = 0.4, or 40%. The percentage
// of females can be calculated as 12 ÷ 20 = 0.6, or 60%

const prompt = require("prompt-sync")({ sigint: true });

let num_of_male_st = prompt("Enter the number of males in class: ");
let num_of_female_st  = prompt("Enter the number of females in class: ");

let total_students = num_of_male_st + num_of_female_st;
let male_per_st = num_of_male_st / total_students;
let female_per_st = num_of_female_st / total_students;

console.log("Total students: ", total_students);
console.log("Male students percentage in class: ", male_per_st ,"%");
console.log("Female students percentage in class: ", female_per_st , "%")