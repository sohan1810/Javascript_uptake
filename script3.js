
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
// const person = { firstName: "sohan", lastName: "javiya" };

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


// var Global scope function scope
// If we declare a variable from var, then we can also declare it again with the same name, 
// and if we want to re-assign its value then we can do that too.
var s = 3;
var s = 4; // we can declare a variable again.
s = 15;// we can re-assign a variable again.
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
//const num = 30// we cannot change value const ERROR!
// num = 32; // we cannot change value const ERROR!
console.log(num);

// mutable and immutable javascript
//In JavaScript Mutable can be changed or modified after creation & Immutable cannot be changed directly
//Primitive data types like Strings & Numbers are immutable. Once you create them, you can't change their value directly.
//Reference data type like, arrays & objects are mutable. Once you create them, can be changed or modified after creation.
// immutable 
let myNum = 27;
let myString = "hi how are you";

let myNum2 = myNum;
let myString2 = myString;

myNum2 = myNum2 - 5;
myString2 = myString2 += " doing";

console.log(myNum);
console.log(myNum2);
console.log(myString);
console.log(myString2);


// mutable 
const myobj = { name: 'WittCode' };
const myArray = [0, 1, 2];

const my0bj2 = myobj;
const myArray2 = myArray;

my0bj2.soccer = "fun";
myArray2.push(3);

console.log(myobj);
console.log(my0bj2);

console.log(myArray);
console.log(myArray2);

// Functions
// A function is a reusable block of code that can be defined and then executed whenever needed.
// Function Statement
function hello() {
    console.log("hello have are you");
}
hello();//calling a function

//Anonymous functions

//   perameter function
function addTwoNumbers(number1, number2,) {
    // let result = number1 + number2 
    // return result
    return number1 + number2
}
// const result = addTwoNumbers(5, 4)
// console.log("result:", result);
console.log(addTwoNumbers(2, 2));


const result1 = addTwoNumbers(2, 4)
console.log("result:", result1);


hello();//calling a function

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(35, 5);


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
// sum(25, 5);// perameter function calling

// Anonymous functions
// var greet = function () {
//     console.log("Welcome sohan!");
// };

// greet();

// function name
// Normal functions with a name or identifier are known as named functions.

function test() {
    console.log(`This is a named function!`);
};

//Arrow Function 
// Arrow functions in JavaScript are a concise way to write functions that use the fat arrow (=>) symbol instead of the function keyword.
const sun = () => {
    console.log("Welcome sohan!");
}

sun();

// first class function
// A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.

function add(x, y) {
    return x + y;
}
let suum = add;
console.log(add(4, 5));


// When we call a function as a method of the object this keyword refers to the calling object
const person1 = {
    name: "ram",
    age: 22,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person1.greet());

// const obj = {
//     name: 'sohan',
//     normal: function () {
//         console.log(`my name is${this.name}`);
//     },
//     arrow: () => {
//         console.log(`my name is${this.name}`);
//     }
// }

// obj.normal();
// obj.arrow();

console.log(person1.greet());


// Function declarations are hoisted, meaning they are moved to the top of their scope during compilation.
//  Function expressions are not hoisted, so they can't be called before they are defined. 

// Function declarations are hoisted, so they can be called before they are defined. 

// first class function
// A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.

function add(x, y) {
    return x + y;
}
// let sum = add;

// Assigning Functions to Variables
// const greet = function (name) {
//     console.log(`Hello, ${name}!`);
// };
// greet('Sohan');


// Passing Functions as Arguments
function calculate(operation, num1, num2) {
    return operation(num1, num2);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
console.log(calculate(add, 5, 3));
console.log(calculate(subtract, 10, 4));

// Returning Functions from Functions
function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));


//Arrow Function 
const h = (x, y, z = 30) => {
    console.log(x + " " + y + " " + z);
}

h(10, 20);

const c = () => {
    console.log("Hi sohan!");
}

c();


function second_func(greeting, message, name) {
    console.log(`${greeting} ${name} ${message} `);
}

second_func("sohan is learing", 'from GeeksForGeeks', 'JavaScript');

// sohan is learing javascript from geekeforgeeks

// Arrow functions do not have their own arguments object.

//this.
const obj = {
    name: 'sohan',
    normal: function () {
        console.log(`my name is ${this.name}`);
    },
    arrow: () => {
        console.log(`my name is ${this.name}`);
    }
}

obj.normal();
obj.arrow();

///////////////////////////////
// const person = {
//     name: "ram",
//     age: 22,
//     greet: () => {
//         return `Hello , you are ${this.age} years old`
//     }
// }
// console.log(person.greet());

/////////////////////////////////////
const person = {
    name: "ram",
    age: 22,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person.greet());


/////////////////////////////////
// JavaScript new keyword is used to create an instance of an object that has a constructor function.
// A constructor is a function that executes the initialization of an object when the object is created.
// ConstructorFunction: A class or function that specifies the type of the object instance.
// Arguments: A list of values that the constructor will be called with.
// This example shows the use of a new keyword.
function Fruit(color, taste, seeds) {
    this.color = color;
    this.taste = taste;
    this.seeds = seeds;
}

// Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);

// Display the result
console.log(fruit1.color);
