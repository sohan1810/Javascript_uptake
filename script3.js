/*
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

// IIFE - Immediately Invoked Function Expressions javascript
// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function s() {
    console.log(`sohan`);
  })();   //if we don't give ";" the error will come  
  
  ((name) => {
    console.log(`my name is ${name}`);
  })('sohan')
  
  

  //////////
 /* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



// An array in JavaScript is a type of global object used to store data. Arrays can store multiple values in a single variable, which can condense and organize our code.

let mark = [90, 80 ,73, 62, false, "not present"]
console.log(mark[0])
console.log(mark[1])
console.log(mark[2])
console.log(mark[3])
console.log(mark[4])
console.log(mark[5])
console.log(" length of array", mark.length);
mark.push("Node.js");
mark.unshift("Web Development");
let a = mark.pop();
console.log("After Removing the last: " + a);
let ab = mark.shift();
console.log("After Removing the First: " + ab);
mark.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);
// mark[6] = 55//adding a new value of array
// mark[0] = 95//changing the value of a array
console.log(mark)
// console.log(typeof mark);

// array concat 
// Creating an Array and Initializing with Values
let c = ["HTML", "CSS", "JS", "React"];
let b = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = c.concat(b);

console.log("Concatenated Array: ", concateArray);

//array tostring()
let a = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(a.toString());
console.log(a.flat());

// array flat()
let a = [[1, 2], 3, [4, 5]];
let b = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(a.flat());
// console.log(b.slice(1));

// Array toSpliced
const months = ["Jan", "Mar", "Apr", "May"];

const months2 = months.toSpliced(1, 1, "Feb");
console.log(months2);
console.log(months.includes('Jan'));
console.log(months.includes('jun'));

console.log(months.indexOf('Jan'));
console.log(months.indexOf('jun'));


// Array delete
const Employee = {
    firstname: 'sohan',
    lastname: 'javiya',
};

console.log(Employee.firstname);

delete Employee.firstname;

console.log(Employee.firstname);

// // array at() 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit)

fuction and array
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const years = [1990, 1967, 2002, 2010, 2018];
  
//   const age1 = calcAge(years[0]);
//   const age2 = calcAge(years[1]);
//   const age3 = calcAge(years[4]);
//   const age3 = calcAge(years[years.length - 2]);
//   console.log(age1, age2, age3);
  
//   const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//   console.log(ages);


// Coding Challenge #2


// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
 
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
// const tips1 = calcTip(bills[0]);
// const tips2 = calcTip(bills[1]);
// const tips3 = calcTip(bills[2]);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Introduction to Objects

// Array
const jonasArray = [
    'sohan',
    'javiya',
    2024 - 2002,
    'frontend developer',
    ['sahil', 'jay', 'dev']
  ];
  
//   Object
  const jonas = {
    firstName: 'sohan',
    lastName: 'javiya',
    age: 2024 - 2002,
    job: 'frontend developer',
    friends: ['sahil', 'jay', 'dev']
  };
  
//   Object method 

const list = {
    firstName: 'sohan',
    lastName: 'javiya',
    age: 2024 - 2002,
    job: 'frontend developer',
    friends: ['sahil', 'jay', 'dev'],
    salary: function () {
        return 20000;
    },
    fname: function () {
        return this.firstName + " " + this.lastName;
        // return firstName + " " +lastName;// firstName is not defined at Object.fname
    }
};
console.log(list);
console.log(list.friends);
console.log(list.age);
console.log(list.salary());
console.log(list.fname());

// Dot vs. Bracket Notation
const listarr = {
    firstName: 'sohan',
    lastName: 'javiya',
    age: 2024 - 2002,
    job: 'frontend developer',
    friends: ['sahil', 'jay', 'dev']
  };
console.log(listarr);

console.log(listarr.lastName);
console.log(listarr['lastName']);

const nameKey = 'Name';
console.log(listarr['first' + nameKey]);
console.log(listarr['last' + nameKey]);

// console.log(listarr.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about listarr? Choose between firstName, lastName, age, job, and friends');
// console.log(listarr[interestedIn]);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${listarr.firstName} has ${listarr.friends.length} friends, and his best friend is called ${listarr.friends[2]}`);

// Coding Challenge #3


Let's go back to sahil and sohan comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (sahil javiya and sohan javiya)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "sohan javiya's BMI (28.3) is higher than sahil javiya's (23.9)!"

TEST DATA: sahils weights 78 kg and is 1.69 m tall. sohan weights 92 kg and is 1.95 m tall.


const sahil = {
  fullName: 'sahil javiya',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const sohan = {
  fullName: 'sohan javiya',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

sahil.calcBMI();
sohan.calcBMI();

console.log(sahil.bmi, sohan.bmi);

// "sohan javiya's BMI (28.3) is higher than sahil javiya's (23.9)!"

if (sahil.bmi > sohan.bmi) {
  console.log(`${sahil.fullName}'s BMI (${sahil.bmi}) is higher than ${sohan.fullName}'s BMI (${sohan.bmi})`)
} else if (sohan.bmi > sahil.bmi) {
  console.log(`${sohan.fullName}'s BMI (${sohan.bmi}) is higher than ${sahil.fullName}'s BMI (${sahil.bmi})`)
}

// loop
// for loop

// for(let i = 1; i <= 20; i++ ){
//   console.log(i);
// }


// let n = prompt("Enter a number!!");
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += (i + 1);
//   console.log((i+1), "+")
// }
// console.log(sum);

// Looping Arrays, Breaking and Continuing
// const sohanArr = [
//   'sohan',
//   'javiya',
//   2024 - 2002,
//   'frontend developer',
//   ['sahil', 'jay', 'dev'],
//   true
// ];

// for (let i = 0; i < 6; i++) {
//   console.log(sohanArr[i]);
//  }


// const sohanArr = [
//   'sohan',
//   'javiya',
//   2024 - 2002,
//   'frontend developer',
//   ['sahil', 'jay', 'dev'],
//   true,
//   9145623481
// ];
// const types = [];

// for (let i = 0; i < sohanArr.length; i++) {
  // Reading from sohanArr array
    // console.log(sohanArr[i]);
  // console.log(sohanArr[i], typeof sohanArr[i]);

  // Filling types array only for try out 
  // types[i] = typeof sohanArr[i];
  // types.push(typeof sohanArr[i]);
// }

// console.log(types);

// const years = [1971, 2002, 1975, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }
// console.log(ages);

// continue and break
for(let i = 1; i <= 10; i++ ){
  if (i == 5) {
    console.log("sohan" + i + "<br>");
    // continue;
    break;
  }
  console.log("num" + i + "<br>");
}


// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
 */
//push, pop, unshift, shift, at, sort, reverse, join, includes, indexOf 
// const sum = [1, 2, 3, 4, 5];
// let a = sum.at(2);
// const b = new Array(7, 6, 5, 4, 3, 2, 1, 0);
// // b.push(1);
// // b.push(2);
// // b.push(3);
// // b.push(4);
// // b.push(5);
// // b.push(6);
// // b.push(7);
// b.push(8);
// // b.pop();
// b.unshift(22);
// // b.shift(22);
// b.sort();
// b.reverse();
// const c = b.join();
// console.log(sum);
// console.log(a);
// console.log(b);
// console.log(c, typeof c);
// console.log(sum.includes(5));
// console.log(b.indexOf(3));

/////////////////////////////////////////////////////
// // slice, splice
// const myArr = [0, 1, 2, 3, 4, 5]
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);

// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);

// console.log("C ", myArr);

///////////////////////////////////////////
//  Array filter()
// const ages = [32, 33, 16, 12, 66, 6, 18, 40];
// const checkAdult = ages.filter((a)=>{
//     return a > 18;
// })
//  console.log(checkAdult);
//  console.log(ages);

 //////////////////////////////////
//  map
// creates a new array by performing Some operation on Each array element.
//  const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(function myFunction(num) {
//   return num - 10;
// })

// function myFunction(num) {
//   return num - 10;
// }
// console.log(newArr);
///////////////////////////////////////////////////
//reduce
// It is useful for doing operations like max in an array, min in an array and sum of array.
// let arr1 = [10, 20, 30, 40, 50];
// let newArr = arr1.reduce((s1, s2)=>{
//     return s1 + s2;
// })
//   console.log(newArr);

// })

/////////////////////////////////////////////////////////
//find & findIndex

// let array = [10, 20, 30, 40, 50];

// let found = array.find(function (element) {
//     return element > 20;
// });

// console.log(found);


/////////////////////////////////////////////////////////
// //Entries
// The entries() method in JavaScript is used to create an iterator that returns key/value pairs for each index in the array.

// const array = [1, 2, 3, 4, 5];

// for (const num of array.entries()) {
//     console.log(num);
// }
///////////////////////////////
//new array()
// let sum = [1, 2, 3, 4, 5];
//  console.log(sum);
 
//  sum = new Array(8, 9, 10);
//  console.log(sum);



// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/


