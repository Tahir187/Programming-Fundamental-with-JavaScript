// 11. Book Club Points
// Serendipity Booksellers has a book club that awards points to its customers based on the
// number of books purchased each month. The points are awarded as follows:
// • If a customer purchases 0 books, he or she earns 0 points.
// • If a customer purchases 2 books, he or she earns 5 points.
// • If a customer purchases 4 books, he or she earns 15 points.
// • If a customer purchases 6 books, he or she earns 30 points.
// • If a customer purchases 8 or more books, he or she earns 60 points.
// Write a program that asks the user to enter the number of books that he or she has pur-
// chased this month, then displays the number of points awarded.

const prompt = require("prompt-sync")({sigint:true})

const books_purchasse = prompt("Enter the number of books that he or she has purchased this month: ")

console.log("He or She has purchased books: ",books_purchasse);

if(books_purchasse < 0){
    console.log("You have to purchase books for earning points");
}

else if(books_purchasse >= 0 && books_purchasse <=1){
    console.log("You have earns 0 points.");
}

else if(books_purchasse >= 2 && books_purchasse <= 3){
    console.log("You have earns 5 points.");
}

else if(books_purchasse >= 4 && books_purchasse <= 5){
    console.log("You have earns 15 points.");
}
else if(books_purchasse >= 6 && books_purchasse <=7){
    console.log("You have earns 30 poins.");
}else if(books_purchasse >= 8){
    console.log("You have earns 60 points");
};