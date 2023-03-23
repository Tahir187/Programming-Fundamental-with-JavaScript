// 5. Mass and Weight
// Scientists measure an object’s mass in kilograms and its weight in newtons. If you know
// the amount of mass of an object in kilograms, you can calculate its weight in newtons with
// the following formula:

//                 weight = mass * 9.8

// Write a program that asks the user to enter an object’s mass, then calculates its weight. If
// the object weighs more than 500 newtons, display a message indicating that it is too heavy.
// If the object weighs less than 100 newtons, display a message indicating that it is too light.

let mass = 65;
let weight = (mass * 9.8);
console.log(weight);
if(weight>500){
    console.log("It is too heavy ");
}else if(weight<100){
    console.log("It is too light ");
}else{console.log("It is perfect ");}