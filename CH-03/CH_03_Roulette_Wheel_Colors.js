// 9. Roulette Wheel Colors
// On a roulette wheel, the pockets are numbered from 0 to 36. The colors of the pockets are
// as follows:
// • Pocket 0 is green.
// • For pockets 1 through 10, the odd-numbered pockets are red and the even-numbered
// pockets are black.
// • For pockets 11 through 18, the odd-numbered pockets are black and the even-numbered
// pockets are red.
// • For pockets 19 through 28, the odd-numbered pockets are red and the even-numbered
// pockets are black.
// • For pockets 29 through 36, the odd-numbered pockets are black and the even-numbered
// pockets are red.
// Write a program that asks the user to enter a pocket number and displays whether the
// pocket is green, red, or black. The program should display an error message if the user
// enters a number that is outside the range of 0 through 36.

const prompt = require("prompt-sync")({sigint:true});

const user_pocket_num = prompt("Enter the pocket number: ");
console.log(user_pocket_num);

if(user_pocket_num == 0){
    console.log("Pocket 0 is green");
}

else if(user_pocket_num >=1 && user_pocket_num <= 10){
    if(user_pocket_num % 2 !==0){
        console.log("The odd-numbered pockets are red");
    }else{console.log("The even-numbered pockets are black");}
}

else if(user_pocket_num >=11 && user_pocket_num <=18){
    if(user_pocket_num %2 !==0){
        console.log("The odd-numbered pockets are black");
    }else{console.log("the even-numbered pockets are red");}
}

else if(user_pocket_num >=19 && user_pocket_num<=28){
    if(user_pocket_num %2 !==0){
        console.log("The odd-numbered pockets are red");
    }else{console.log("The even-numbered pockets are black");}
}
else if(user_pocket_num >=29 && user_pocket_num <= 36){
    if(user_pocket_num %2 !== 0){
        console.log("The odd-numbered pockets are black");
    }else{("The even-numbered pockets are red");}
}

else{("Enter the pocket number in range of 0 36")};