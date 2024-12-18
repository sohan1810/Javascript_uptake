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

let num = 5;
const num1 = num ?? 11;
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

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

const menu = [...allPlayers];

for (const item of menu) console.log(item);

// The for-of Loop
const array1 = ["a", "b", "c"];

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

// let n = "name";
// var obj = {
//   [n]: "sohan",
//   age: 22,
// };
// console.log(obj);

// let m = "first";
// var obj = {
//   [m + " name"]: "sohan",
//   age: 22,
// };
// console.log(obj);

// let s = "first";
// var obj = {
//   [s + "name"]: "sohan",
//   age: 22,
//   detail: function () {
//     return `${this.firstname} age is ${this.age}`;
//   },
// };
// console.log(obj);
// console.log(obj.detail());

// // Optional Chaining
// const user = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "Main St",
//     city: "New York",
//     state: "NY",
//     zip: 10001,
//   },
// };
// console.log(user?.address?.zip); // 10001
// console.log(user?.phone?.number);

// Object.keys pass key values of object in array (output array)

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object1));

// Object.values return an array of the property values of a object (output array)

const object2 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.values(object2));

// object.entries return an array of the key/value pairs of an object (output string)

const object3 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object3)) {
  console.log(`${key}: ${value}`);
}

//sets
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);

//maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2

/* 
// Coding Challenge #2
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) 
average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team,odd);//display game.odds 
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

//map iteration in javascript
let question = new Map([
  ["question", "What is the best programming language"],
  [1, "c"],
  [2, "java"],
  [3, "JS"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
// Log the Map
console.log(question);

//  CONVERT MAP TO ARRAY AGAIN
// Convert Map to Array
console.log(Array.from(question));

//  CONVERT OBJECT TO MAP AGAIN
const obj = {
  user1: "John",
  user2: "Kate",
  user3: "Peter",
};
const map = new Map(Object.entries(obj));

console.log(map);

//Quizz App
//here wr get the QQuestion and anser in key values format
//object is not litrals so we convert in to the litrels
for (const [key, values] of question) {
  console.log(`${key} = ${values}`);
}


console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀



const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

// Working With Strings - Part 1
const airline = 'Tap Air India';
const airline1 = '   Tap Air Indin    .';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('India'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline1.trim());
console.log(airline.replace("Tap", 'my'));
console.log(airline.includes('Air'));
console.log(airline.startsWith('Air',4));
console.log(airline.endsWith('India'));
let airline2 = ["sohan", "sahil", "abhay", "dev"]
console.log(airline2.join("_"));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(1, 5);
  return last.padEnd(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(3378463864647384));
console.log(maskCreditCard('334859493847755774747'));

const airline99 = 'Tap Air India.';
console.log(airline99.repeat(10));

