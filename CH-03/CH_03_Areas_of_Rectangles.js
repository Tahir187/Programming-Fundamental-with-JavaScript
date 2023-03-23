// The area of a rectangle is the rectangle’s length times its width. Write a program that asks
// for the length and width of two rectangles. The program should tell the user which rectan-
// gle has the greater area, or if the areas are the same.

let lengthOfFisrtRectangle = 10;
let widthOfFirstRectangle = 20;

let lengthOfSecondRectangle = 20;
let widthOFSecondRectangle = 20;

let rectangle_1 = (lengthOfFisrtRectangle * widthOfFirstRectangle);
let rectangle_2 = (lengthOfSecondRectangle * widthOFSecondRectangle);

if(rectangle_1>rectangle_2){
    console.log("Rectangle one has greater area ");
}else if(rectangle_1<rectangle_2){
    console.log("Rectangle two has greater area ");
}else{console.log("Both Rectangle have same area ")}