// compersion operators

// ==
// const a = 10;
// const b = "10";
// console.log(a == b);

// ===
// const a = 10;
// const b = "10";
// console.log(a === b);

// !=
// const a = 10;
// const b = 1;
// console.log(a != b);

// !==
// const a = 10;
// const b = "10";
// console.log(a !== b);

// >
// const a = 10;
// const b = 15;
// console.log(a > b);

// <
// const a = 10;
// const b = 15;
// console.log(a < b);

// >=
// const a = 10;
// const b = 15;
// console.log(a >= b);

// <=
// const a = 10;
// const b = 15;
// console.log(a <= b);


//  Operator Logical

// && || !

// &&
// const a = 6;
// const b = 3;
// console.log(x < 10 && y > 1);//true
// console.log(x < 10 && y < 1);//false

// ||
// const a = 6;
// const b = 3;
// console.log(x == 5 || y == 5) ;//false
// console.log(x == 6 || y == 0) ;//true
// console.log(x == 0 || y == 3) ;//true
// console.log(x == 6 || y == 3) ;//true

// !
// let x = 6;
// let y = 3;
// console.log(!(x === y));
// console.log(!(x > y));

// arithmetic operation
// +
// let a = 5;
// let b = 2;
// let x = a + b;
// console.log( x);

// -
// let a = 5;
// let b = 2;
// let x = a - b;
// console.log( x);

// *
// let a = 5;
// let b = 2;
// let x = a * b;
// console.log( x);

//  /
// let a = 5;
// let b = 2;
// let x = a / b;
// console.log( x);

// %
// let a = 5;
// let b = 2;
// let x = a % b;
// console.log( x);

//  **
// let a = 5;
// console.log(a ** 2);

// --
// let x = 5;
// x--;
// let z = x;
// console.log(z);

// --
// let x = 5;
// x++;
// let z = x;
// console.log(z);


// Assignment Operators

// =
// let x = 10;
// console.log(x);

//+=
// let x = 10;
// x += 5;
// console.log(x);

//-=
// let x = 10;
// x -= 5;
// console.log(x);

//*=
// let x = 10;
// x *= 5;
// console.log(x);

//**=
// let x = 10;
// x **= 5;
// console.log(x);

// /=
// let x = 10;
// x /= 5;
// console.log(x);

// %=
// let x = 10;
// x %= 5;
// console.log(x);

//*=
// let x = 10;
// x *= 5;
// console.log(x);

// data type
// Numbers:
// let length = 20;
// let weight = 5.7;

// Strings:
// let color = "red";
// let lastName = "sohan";

// Booleans
// let x = true;
// let y = false;

// Object:
// const person = { firstName: "sohan", lastName: "javiya" };

// Array object:
// const cars = ["1", "2", "3"];

// Date object:
// const date = new Date("2022-03-25");

// undefined
// let car;
// car = undefined;

// null
// let p = null;


// 6. Symbol(ES2015); Value that is unique and cannot be changed(Not useful for now)
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

//   let id = Symbol('id');
//   person[id] = 140353;
//   console.log(person[id]);


// Truthy and Falsy Values


// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100; //true
// if (money) {
//   console.log("Don't spend it all ");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;//false
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// Functions
// simple function
hello();
function hello() {
  console.log("hello have are you");
}

hello();
hello();

//   perameter function
function addTwoNumbers(number1, number2) {
  let result = number1 + number2
  return result
  // result number1+number2
}

const result = addTwoNumbers(5, 4)

console.log("result:", result);



// Function declaration
show();
function show() {
  console.log("sohan");
}

// Function expression
let sameName = function show() {
  console.log("sohan");
}
sameName();


// Function anonymous
let sameName1 = function () {
  console.log("sohan1");
}
sameName1();

//arrow function
const h = (x, y, z = 30) => {
  console.log(x + " " + y + " " + z); //10 20 30
  console.log(x + y + z);//60

}

h(10, 20);


function second_func(greeting, message, name) {
  console.log(`${greeting} ${name} ${message} `);
}

second_func("sohan is learing", 'from GeeksForGeeks', 'JavaScript');

// this.
const person = {
  name: "ram",
  age: 22,
  greet: function () {
    return `Hello ${this.name}, you are ${this.age} years old`
  }
}
console.log(person.greet());

// constructor function
function Fruit(color, taste, seeds) {
  this.color = color;
  this.taste = taste;
  this.seeds = seeds;
}

// Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);

// Display the result
console.log(fruit1.color);
