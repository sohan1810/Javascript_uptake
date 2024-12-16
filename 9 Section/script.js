"use strict";
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //this known as the destructring
console.log(x, y, z);
console.log(arr);

// let [main, secondary] = resturent.categroes;
// console.log(main, secondary);

//since we swith the array destructung it would ne swith the array elements

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//fucntion desctrcrung retun mustpile values
// const [starter, menu] = resturent.order(0, 2);
// console.log(starter, menu);

//if we have both array nested and we wanted saprated so we do destructing
const nested = [1, 2, [4, 5]];
// const [i,j]=nested
// console.log(i, j)

//here we destructued the array
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Destructuring Objects
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });
  
  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });
  
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);
  
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);
  
  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);
  
  // Mutating variables
  let a = 111;
  let b = 999;
  const obj = { a: 23, b: 7, c: 14 };
  ({ a, b } = obj);
  console.log(a, b);
  
  // Nested objects
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(o, c);
  // The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

// let user = [, 22, "sangli",['mail']];
// // let [name1, age, city] = user;
// let [name1, age = 20, city,[gender]] = user;
// console.log(name1);
// console.log(age);
// console.log(city);
// console.log(gender);

// function user() {
//   return ['sohan', 22,'sangli'];
// }
// let [name, age ,city]=user();
// console.log(city);

// let user = {
//   name1: "sohan",
//   age: 22,
//   city: "sangli",
// };
// // let [name1, age, city] = user;
// let { name1, age, city } = user;
// console.log(name1);
// console.log(age);
// console.log(city);

// // The Spread Operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// // const numbersCombined = [...numbersOne, numbersTwo[0],numbersTwo[1],numbersTwo[3]];
// // const numbersCombined = [11, ,22,33, ...numbersTwo];
// // const numbersCombined1 = [11,22,33, numbersOne];
// const numbersCombined1 = [ ...numbersOne , 22, ...numbersTwo];
// // console.log(numbersCombined);
// console.log(numbersCombined1);

// const myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };

// const updateMyVehicle = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

// console.log(myUpdatedVehicle);

// const str = 'Jonas';
// const letters = [...str];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`); //Unexpected token

// rest parameter
// equals to assigenment operator
// rest parameter take the multiple array and then pack into one array

// const add = function sum(...arr) {
//   console.log(...arr);
// };
// add(2, 3);//2 3
// add(2, 3, 4, 5);// 2 3 4 5

const add = function (...numbers) {
  console.log(...numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

function fun(a, b) {
  return a + b;
}
console.log(fun(1, 2));
console.log(fun(1, 2, 3, 4, 5));

// function fun(...input) {
//   let sum = 9;
//   for (let i of input) {
//     sum += 0;
//   }
//   return sum;
// }
// console.log(fun(1, 2)); //3
// console.log(fun(1, 2, 3)); //6
// console.log(fun(1, 2, 3, 4, 5)); //15

//there are some more or operation is left to express
//the logical operator peoduce boolean s not neccery
//they can use any data type and retun any data type
//and they can also do short curciting
//short-curict - thsat means if one of are values a\is truthy it wil imigently retun that values
//if first values it becomes true it will not evuvlate the second value
// Types of Short-Circuiting:
// AND(&&) Short Circuit
// OR(||) Short Circuit
console.log(3 || "jonas"); //truthy
console.log("" || "jonas"); //falsy
console.log(true || 0); //falsy
console.log(undefined || null); //falsy

console.log("---- OR ----");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");


// / The nullish coalescing operator (??) is a JavaScript operator that is used to provide 
// a default value for a variable that may be null or undefined.

// In JavaScript, the following values are considered falsy:
//  false, 0, ""(empty string), null, undefined, and NaN.

//only null, undefined it will pass default value.

let num =5;
const num1= num ?? 11;
console.log(num1);


// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:



TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
// ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);


// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
// ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "sohan", "sahil", "dev"];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
// and prints each of them to the console, along with the number of goals that were scored in total 
// (number of player names passed in)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');//4 goals were scored
// printGoals('Davies', 'Muller');//2 goals were scored
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

const menu = [...allPlayers];

for (const item of menu) console.log(item);

// The for-of Loop
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//enhanced object literals javascript
// let name = "sohan";
// let age = 22;
// let obj = {
//     name,age
// };
// console.log(obj);

let n = "name";
var obj = {
    [n]:"sohan",
    age : 22
};
console.log(obj);

let m = "first";
var obj = {
    [m + " name"]:"sohan",
    age : 22
};
console.log(obj);


let s = "first";
var obj = {
    [s + "name"]:"sohan",
    age : 22,
    detail: function(){
        return `${this.firstname} age is ${this.age}`
    }
};
console.log(obj);
console.log(obj.detail());

