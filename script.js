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
*/

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
     if(age>18){
         console.log("You can drink water");
     }
     else if(age==2){
         console.log("Age is 2")
     }
     else if(age==5){
         console.log("Age is 5")
     }
     else{
         console.log("You can drink Cold Drink");
     }