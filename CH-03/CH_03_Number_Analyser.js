// Write a program that asks the user to enter an integer. The program should display
// “Positive” if the number is greater than 0, “Negative” if the number is less than 0, and
// “Zero” if the number is equal to 0. The program should then display “Even” if the number
// is even, and “Odd” if the number is odd

let n = 4;
if(n>0){
    console.log("Number is Positive");
}else if(n<0){
    console.log("Number is Negative");
}else{console.log("Number is Zero");}

if(n%2==0){
    console.log("Number is Even");
}else{console.log("Number is Odd");}