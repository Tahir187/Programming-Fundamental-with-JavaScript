// 13. Shipping Charges
// The Fast Freight Shipping Company charges the following rates:
            // Weight of Package                         Rate per Pound
            // 2 pounds or less                             $1.50
            // Over 2 pounds but not more than 6 pounds     $3.00
            // Over 6 pounds but not more than 10 pounds    $4.00
            // Over 10 pounds                               $4.75
// Write a program that asks the user to enter the weight of a package then displays the ship-
// ping charges.

const prompt = require("prompt-sync")({sigint:true});

let weight_of_package = prompt("Enter your package weight in £: ");
console.log("Package weight is: ",weight_of_package ,"£");

let shipping_charges = 0;

if(weight_of_package <= 0){
    console.log("Please enter weight for shipping!");
}else if(weight_of_package >=1 && weight_of_package <= 2){

    shipping_charges = (weight_of_package * 1.50);
    console.log("Your shipping charges are: ",shipping_charges,"$");
}else if(weight_of_package >= 2 && weight_of_package <=5){

    shipping_charges = (weight_of_package * 3.00);
    console.log("Your shipping charges are: ",shipping_charges,"$");
}else if(weight_of_package >= 6 && weight_of_package <= 10){

    shipping_charges = (weight_of_package * 4.00);
    console.log("Your shipping charges are: ", shipping_charges,"$");
}else if(weight_of_package > 10){

    shipping_charges = (weight_of_package * 4.75);
    console.log("Your shipping charges are: ",shipping_charges,"$");
}