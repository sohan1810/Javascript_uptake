"use strict";

// this how reminds us that how javascript long codes are executed the insie the call stack in js
//call stack executed  fucntons arguments objects declertions inside the call stack
//understood the how global execution work
//you can store store multiple execution on call stack

//high level
//object orinted
//multi progrmed
//single-thread
//garbage-collected
//first-classfunction
//daynamic
//Non-event Blocking

//scoping : that will be control the how scoping will executing the code like blcok scope
//lexical scoping
//scope are local ,global,
function a(b) {
  const age = 2024 - b;
  return age;
}
const c = d(1991);
console.log(c); // this is global scope

// A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.
// Google Chrom = V8
// Edge = (Internet Explorer)	Chakra
// Mozilla Firefox = Spider Monkey
// Safari =	Javascript Core Webkit

//morde JUST IN TIME COMMPILWR : parsing >> compilation >> Execution

// Compilation
// In this method, all the code is converted to machine language at once, and then written to a file in assembly,
// so that the computer can run the software, which can happen even a long time after the file was created.

// Interpretation
// In this method, the Interpreter goes through the code in an initial pass and then executes it line by line.
// During the runtime, while running line by line, the code is also compiled into machine language.

// Just-in-time compilation in JavaScript
// Now we will talk about how just-in-time compilation is performed in real time in JavaScript.

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age);
// printAge();

// Hoisting
// Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared.
// "Variables lifted to the top of their scope".

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// this keyword/variable: Special variable that is created for every execution context (every function).
// Takes the value of (points to) the "owner" of the function in which the this keyword is used.

// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

