// Write a program that asks the user to enter the radius of a circle. The program should cal-
// culate and display the area and circumference of the circle using πr2 for the area and 2πr
// for the circumference.
// Hint: You can either use 3.14159 as the value of pi (π), or add the statement "import math"
// to the start of the program and then use "math.pi" wherever you need the value of pi in
// the program.


const prompt = require("prompt-sync")({sigint:true});

let radius = prompt("Enter the radius of a circle: ");

let pie = 3.14;
let area = ( pie * ( radius )^2 );
let circumference = (2 * pie * radius);

console.log("Area of a Circle is: ",area);
console.log("Circumference of a Circle is: ",circumference);