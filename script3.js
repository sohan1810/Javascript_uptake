
// Numbers:
let length = 20;
let weight = 5.7;

// Strings:
let color = "red";
let lastName = "sohan";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "sohan", lastName: "javiya" };

// Array object:
const cars = ["", "", ""];

// Date object:
const date = new Date("2022-03-25");

// undefined
let car;
car = undefined;

// null
let p = null;

// var and let create variables that can be reassigned another value.

// const creates "constant" variables that cannot be reassigned another value.


// var Global scope
// If we declare a variable from var, then we can also declare it again with the same name, 
// and if we want to re-assign its value then we can do that too.
var s = 3;
var s = 4; // we can declare a variable again.
console.log(s);

// let block scope.
// If we declare a variable with let, then we cannot declare it again with the same name,
//  but can re-assign its value.
let o = 30;
o = 35;
// let o = 34; // cannot  declare a variable again ERROR!
console.log(o);

// const
// And if we declare variable with const, then we can neither declare it nor can re-assign its value again.
const num = 30
// num = 32; // we cannot change value const ERROR!
console.log(num);

// Functions
// simple function
function hello() {
    console.log("hello have are you");
}
hello();//calling a function

//   perameter function
function addTwoNumbers(number1, number2, num=1) {
    let result = number1 + number2 + num
    return result
    // return number1+number2
}
const result = addTwoNumbers(5, 4, 5)
console.log("result:", result);


const result1 = addTwoNumbers(2, 4)
console.log("result:", result1);


hello();//calling a function

function sum(a, b) {
    console.log(a + b);
}

sum(35, 5);


// Function declaration 

show();
function show() {
    console.log("sohan");
}

// Function expression
//sameName();  // cannot be call before 
let sameName = function show() {
    console.log("sohan");
}
sameName();

hello(); //calling a function
sum(25, 5);// perameter function calling