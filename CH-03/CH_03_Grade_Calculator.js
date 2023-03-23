// 7. Grade Calculator
// A class has two tests worth 25 points each along with a main exam worth 50 points. For a stu-
// dent to pass the class, they must obtain an overall score of at least 50 points, and must obtain at
// least 25 points in the main exam. If a student’s total score is less than 50 or they obtain less than
// 25 points in the main exam, they receive a grade of “Fail”. Otherwise, their grade is as follows:
// If they get more than 80, they get a grade of “Distinction”. 50–59 = “Pass”.
// If they get less than 80 but more than 60, they get a “Credit” grade.
// If they get less than 60, they get a ”Pass” grade.
// Write a program that prompts the user to enter their points for both tests and the exam and
// converts the values to integers. The program should first check if the points entered for the
// tests and exam are valid. If any of the test scores are not between 0 and 25, or the exam
// score is not between 0 and 50, the program should display an error message. Otherwise,
// the program should display the total points and the grade.

const prompt = require('prompt-sync')({sigint: true});

const test1 = prompt("Enter your first test marks: ");
const test2 = prompt("Enter your second test marks: ");
const exam = prompt("Enter your exam marks: ");

console.log(test1)
console.log(test2)
console.log(exam)

if(test1>=0 && test1<=25){
    console.log("These are valid marks of test 1");
}else{console.log("These are not valid marks of test 1");}

if(test2>=0 && test2<=25){
    console.log("These are valid marks of test 2");
}else{console.log("These are not valid marks of test 2");}

if(exam>=0 && exam<=50){
    console.log("These are valid marks of exam ");
}else{console.log("These are not valid marks of exam ");}

let totalMarks = (test1 + test2 + exam);
console.log(totalMarks);

if(totalMarks>=80 && totalMarks<=100){
    console.log("Your grade is Distinction");
}else if(totalMarks>=60 && totalMarks<80){
    console.log("Your grade is Credit");
}else if(totalMarks>=50 && totalMarks<60){
    console.log("You are Pass");
}else{console.log("You are Fail");}