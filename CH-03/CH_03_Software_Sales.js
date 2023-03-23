// 12. Software Sales
// A software company sells a package that retails for $99. Quantity discounts are given
// according to the following table:

//                           Quantity Discount
//                             10–19    10%
//                             20–49    20%
//                             50–99    30%
//                             100 ormore 40%
// Write a program that asks the user to enter the number of packages purchased. The pro-
// gram should then display the amount of the discount (if any) and the total amount of the
// purchase after the discount.

// number_of_packages = ?
// amount_of_discount = ?
// total_amount_of_purchase_after_discount = ?

const prompt = require("prompt-sync")({sigint:true});

let number_of_packages = prompt("Enter the number of packages you have purchased: ");

let package = 99;
let amount_of_discount = 0;
let total_amount_of_purchase_after_discount = 0;
let total_amount = (number_of_packages * package);

if(number_of_packages >=10 && number_of_packages <= 19){
    amount_of_discount = total_amount * (10/100);
    total_amount_of_purchase_after_discount = (total_amount - amount_of_discount) ;
    console.log("Your total amount is: ",total_amount);
    console.log("Amount of discount on your package is: ",amount_of_discount);
    console.log("Total purchase after discount at your package is: ",total_amount_of_purchase_after_discount);   
}

else if(number_of_packages >= 20 && number_of_packages <= 49){
    amount_of_discount = total_amount * (20/100);
    total_amount_of_purchase_after_discount = (total_amount - amount_of_discount) ;
    console.log("Your total amount is: ",total_amount);
    console.log("Amount of discount on your package is: ",amount_of_discount);
    console.log("Total purchase after discount at your package is: ",total_amount_of_purchase_after_discount);
}

else if(number_of_packages >= 50 && number_of_packages <= 99){
    amount_of_discount = total_amount * (30/100);
    total_amount_of_purchase_after_discount = (total_amount - amount_of_discount) ;
    console.log("Your total amount is: ",total_amount);
    console.log("Amount of discount on your package is: ",amount_of_discount);
    console.log("Total purchase after discount at your package is: ",total_amount_of_purchase_after_discount);
}

else if(number_of_packages >= 100){
    amount_of_discount = total_amount * (40/100);
    total_amount_of_purchase_after_discount = (total_amount - amount_of_discount) ;
    console.log("Your total amount is: ",total_amount);
    console.log("Amount of discount on your package is: ",amount_of_discount);
    console.log("Total purchase after discount at your package is: ",total_amount_of_purchase_after_discount);
}

else{
    console.log("You total amount is: ", total_amount);
    console.log("For discount you have to purchase 10 or more than 10 packages.")
}