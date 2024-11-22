// 1.Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
// Solution:-

// const a = [3, 2, 2, 4, 3];
// a.reverse();
// console.log(a);

//////////////////////////////////
// 2.Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// const a = ["w", "e", "b", "m", "a", "s", "t", "e", "r"];
// a.sort();
// console.log(a.join(''));

// Solution:-
// s = (arr) => {
//     return arr.split("").sort().join('');
// }
// console.log(s("webmaster"));

//////////////////////////////////
// 7. You have an array of numbers. Write a function that  double each number in the array.
// const numbers = [1, 2, 3, 4, 5];
// Expected output: [2, 4, 6, 8, 10]

// Solution:-
// const numbers = [1, 2, 3, 4, 5];
// const newArr = numbers.map(function myFunction(num) {
//     return num * 2;
// });
// console.log(newArr);

///////////////////////////
// 9.You have an array of numbers. Write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
// const numbers = [1, 2, 3, 4, 5];
// Expected output: 15

// Solution:-
// let arr1 = [1, 2, 3, 4, 5];
// let newArr = arr1.reduce((s1, s2) => {
// console.log(`${s1} + ${s2} = ${s1+s2}`)
//     return s1 + s2;
// })
// console.log(newArr);

//////////////////////////////////
//   10. Given an array of objects representing users, write a function that uses the find() method 
// to return the user which name is Bob with its specific id
//   const users = [
//       { id: 1, name: 'Alice' },
//       { id: 2, name: 'Bob' },
//       { id: 3, name: 'Charlie' }
//   ];

// Solution:-
// let array = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// let found = array.find(function (element) {
//     return element.name === "Bob";
// });

// console.log(found);

//////////////////////////////////
// 11. Write a function that return a new array containing the first three elements of a given array.
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// Expected output: ['Apple', 'Banana', 'Cherry']

// Solution:-
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// function First(arr) {
//     return arr.slice(0, 3);
//   }

// console.log(First(fruits));

//////////////////////////////////
// 12. You have an array of fruits. Write a function to remove two elements from the array starting from the
// second position (index 1) and returns the modified array along with the removed elements.
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// function removeFruits(arr) {
// Your code here
// }

// Solution:-
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// function First(arr) {
//     return arr.splice(1, 2);
//   }

// console.log(First(fruits));
// console.log(fruits);

//////////////////////////////////
