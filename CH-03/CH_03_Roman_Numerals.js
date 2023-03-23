// 4. Roman Numerals
// Write a program that prompts the user to enter a number within the range of 1 through 10.
// The program should display the Roman numeral version of that number. If the number is
// outside the range of 1 through 10, the program should display an error message. The fol-
// lowing table shows the Roman numerals for the numbers 1 through 10:

//                         Number Roman Numeral
//                           1             I
//                           2             II
//                           3             III
//                           4             IV
//                           5             V
//                           6             VI
//                           7             VII
//                           8             VIII
//                           9             IX
//                           10            X

let num = 1;
if(num===1){
    console.log(num,  " is I");
}else if(num === 2){
    console.log(num,  " is II");
}else if(num === 3){
    console.log(num,  " is III");
}else if(num === 4){
    console.log(num,  " is IV");
}else if(num === 5){
    console.log(num,  " is V");
}else if(num === 6){
    console.log(num,  " is VI");
}else if(num === 7){
    console.log(num,  " is VII");
}else if(num === 8){
    console.log(num,  " is VIII");
}else if(num === 9){
    console.log(num,  " is IX");
}else if(num === 10){
    console.log(num,  " is X");
}else{console.log("Enter number in range 1 to 10 ")}