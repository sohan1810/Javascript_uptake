/*
// Linking a JavaScript File
let js = 'amazing';
// if (js === 'amazing') alert('javascript is fun!');
86 + 4 + 20 - 22;
console.log(86 + 4 + 20 - 22);

// Values and Variables
console.log("Sohan");
console.log(22);

// let firstName = "Sohan";
let first_name = "sahil";

// console.log(firstName);
console.log(first_name);


let jonas_matilda = "sj";
let $function = 51;
console.log(jonas_matilda);
console.log($function);

let person = "java";
let PI = 4.2345;
console.log(person);
console.log(PI);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
console.log(myFirstJob);
console.log(myCurrentJob);

let job1 = "programmer";
let job2 = "teacher";
console.log(job1);
console.log(job2);

// THE 7 PRIMITIVE DATA TYPES
// 1. Number.Floating point numbers Used for decimals and integers let age= 23;
// 2. String: Sequence of characters Used for text let firstName = 'sohan';
// 3. Boolean: Logical type that can only be true or false Used for taking decisions let fullAge = true;
// 4. Undefined: Value taken by a variable that is not yet defined('empty value) let children:
// 5. Null: Also means 'empty value'
// 6. Symbol(ES2015); Value that is unique and cannot be changed(Not useful for now)
// 7. Bigint(ES2020): Larger integers than the Number type can hold

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined value 
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); 

// let, const and var

let age = 30;
age = 31;
age = 38;
console.log(age);

// Const value will not change any time
const birthYear = 1971;
// birthYear = 1975;
// const job;

var job = 'programmer';
job = 'teacher'
console.log(job);

// do not right the variables like this error in javascript
// lastName = 'Schmedtmann';
// console.log(lastName);

// Basic Operators
// Math operators left-to-right
const now = 2024;
const age1 = now - 1971;
const age2 = now - 2002;
console.log(age1, age2);

  
console.log(age1 * 2, age1 / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'sohan';
const lastName = 'sahil';
console.log(firstName + ' ' + lastName);


// Assignment operators right-to-left 
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1
x--; //x = x - 1
console.log(x);

// Comparison operators  left-to-right
console.log(age1 > age2); // >, <, >=, <=
console.log(age2 >= 18);

// const isFullAge = age2 >= 18;

console.log(now - 1971 > now - 2002);

// second day

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const now = 2024;
const age1 = now - 1971;
const age2 = now - 2002;
console.log(age1, age2);

const averageAge = age1 + age2 / 2; // first Division and then Addition
// const averageAge = (age1 + age2) / 2; Grouping first Addition and then Division 
console.log(age1, age2, averageAge);

// Coding Challenge #1
// TEST DATA 1: sahil weights 78 kg and is 1.69 m tall. sohan weights 92 kg and is 1.95 m tall.

// const massSahil = 78;
// const heightSahil = 1.69;
// const massSohan = 92;
// const heightSohan = 1.95;
// console.log(massSahil);
// console.log(heightSahil);
// console.log(massSohan);
// console.log(heightSohan);

// TEST DATA 2: sahil weights 95 kg and is 1.88 m tall. sohan weights 85 kg and is 1.76 m tall.
const massSahil = 95;
const heightSahil = 1.88;
const massSohan = 85;
const heightSohan = 1.76;

// Sahil and Sohan are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
// BMI-A BMI Calculator using JavaScript allows users to input their weight and height, then calculates and displays their Body Mass Index (BMI), helping assess whether they are underweight, normal weight, or overweight.
// 1. Store Sahil and Sohan mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Sahil has a higher BMI than Sohan.

const BMISahil = massSahil / heightSahil ** 2;
const BMISohan = massSohan / (heightSohan * heightSohan);
const markHigherBMI = BMISahil > BMISohan;
console.log(BMISahil, BMISohan, markHigherBMI);


// Strings and Template Literals
const firstName = 'Sohan';
const job = 'mern developer';
const birthYear = 2002;
const year = 2024;

const sohan = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(sohan);

// using ${variablе} The most common use cases of string interpolation is to insеrt thе valuеs of variablеs into a string.
const sohanNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`; 
console.log(sohanNew);


console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


// Taking Decisions: if / else Statements 
const age1 = 19;

if (age1 >= 18) {
  console.log('Sohan can start driving license 🚗');
}
else {
  const yearsLeft = 18 - age1;
  console.log(`Sohan is too young. Wait another ${yearsLeft} years 😊`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
  century = 20;
}
else {
  century = 21;
}
console.log(century);

let age = 5;
if (age > 18) {
  console.log("You can drink water");
}
else if (age == 2) {
  console.log("Age is 2")
}
else if (age == 5) {
  console.log("Age is 5")
}
else {
  console.log("You can drink Cold Drink");
}

// Coding Challenge #2


// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Sahil's BMI is higher than Sohan's!" or "Sohan's BMI is higher than Sahil's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Sahil's BMI (28.3) is higher than Sohan's (23.9)!"

const massSahil = 78;
const heightSahil = 1.69;
const massSohan = 92;
const heightSohan = 1.95;

// const massSahil = 95;
// const heightSahil = 1.88;
// const massSohan = 85;
// const heightSohan = 1.76;

const BMISahil = massSahil / heightSahil ** 2;
const BMISohan = massSohan / (heightSohan * heightSohan);
console.log(BMISahil, BMISohan);

if (BMISahil > BMISohan) {
  console.log(`Sahil's BMI (${BMISahil}) is higher than Sohan's(${BMISohan}) !`)
}
else {
  console.log(`Sohan's BMI(${BMISohan}) is higher than Sahil's(${BMISahil}) !`)
}

// Type conversion 
let myVar;
myVar = String(34);//number into a String
// console.log(myVar, (typeof myVar));
// let booleanVar = String(true); //boolean into a String
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date()); //object into a String
// console.log(date, (typeof date));

// let arr = String([1, 2, 3, 4, 5]); //Array into a String length = 9
let arr = [1, 2, 3, 4, 5]; //Array into a String length = 5
console.log(arr.length, (typeof arr)); 
//length is a property of JavaScript strings, arrays, and some other objects that returns the number of characters or elements in that object.

let i = 75;
// console.log(i.toString())

let stri = Number("3434"); //number
stri = Number("343d4"); //not a number 
stri = Number(false); //false = 0 and true = 1
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]); // if we use array or String it will show NaN = not a number
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');// parseInt('34') parseFloat('34.098') The parseInt method parses a value as a string and returns the first integer.

//The toFixed() method rounds the string to a specified number of decimals.
// console.log(number.toFixed(2), (typeof number)); 


// Type coercion
// Type coercion refers to the automatic conversion of values from one data type to another
let mystr = Number("698");
let mynum = 34;
// let mynum = '34';// String
console.log(mystr + mynum);


// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// Equality Operators: (== value are same) vs. (=== value are same and data type same)  
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


// Logical Operators
&&,||, ! are Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sohan is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sohan is able to drive!');
} else {
  console.log('Someone else should drive...');
}



// Coding Challenge #3


There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1 Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

// The switch Statement
const day = 'wednesday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'wednesday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}


// // Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);
*/