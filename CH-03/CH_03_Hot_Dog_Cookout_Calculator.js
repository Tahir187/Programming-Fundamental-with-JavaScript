// 8. Hot Dog Cookout Calculator
// Assume hot dogs come in packages of 10, and hot dog buns come in packages of 8. Write a
// program that calculates the number of packages of hot dogs and the number of packages of
// hot dog buns needed for a cookout, with the minimum amount of leftovers. The program
// should ask the user for the number of people attending the cookout and the number of hot
// dogs each person will be given. The program should display the following details:
// • The minimum number of packages of hot dogs required
// • The minimum number of packages of hot dog buns required
// • The number of hot dogs that will be left over
// • The number of hot dog buns that will be left over.

const prompt = require('prompt-sync')({sigint: true});

const num_of_people = prompt("How many People are anttending the cookout: ");
const num_of_hot_dogs_per_person = prompt("Enter the number of hot dogs: ");

const num_of_hot_dogs_per_packages  = 10;
const num_of_hot_dogs_buns_per_packages = 8;

const total_num_of_hot_dogs = (num_of_hot_dogs_per_person * num_of_people);
const num_of_hotdog_packages_needed = (total_num_of_hot_dogs / num_of_hot_dogs_per_packages);
const num_of_hotdog_buns_packages_needed = (total_num_of_hot_dogs / num_of_hot_dogs_buns_per_packages);
const num_of_hotdogs_left_over = (total_num_of_hot_dogs % num_of_hot_dogs_per_packages);
const num_of_hotdog_buns_left_over = (total_num_of_hot_dogs % num_of_hot_dogs_buns_per_packages);

console.log(num_of_people);
console.log(num_of_hot_dogs_per_person);
console.log("The total hot dogs will be needed are: ",total_num_of_hot_dogs);
console.log("The total hot dogs packages will be needed: ",num_of_hotdog_packages_needed);
console.log("The total hot dog buns packages will be needed: ",num_of_hotdog_buns_packages_needed);
console.log("The number of hot dogs will be left over: ",num_of_hotdogs_left_over);
console.log("The number of hot dog buns will be left over: ",num_of_hotdog_buns_left_over);