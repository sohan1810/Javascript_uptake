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
// 3.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// Solution:-
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
//////////////////////////////////
// 4.Write a JavaScript program to calculate number of days left until next Christmas

// Solution:-
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

//////////////////////////////////
// 5. Write a JavaScript program that accept two integers and display the larger.
// Solution:-
// var num1 = 56
// var num2 = 89
// if(num1>num2)
// {
//     console.log(num1);
// }
// else
// {
//     console.log(num2);
// }

//////////////////////////////////
// 6.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.

// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// Solution:-
for (var x = 0; x <= 15; x++) {
   
     if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}

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
// 9.You have an array of numbers. Write a function that uses the reduce() method
// to calculate the sum of all the numbers in the array.
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

// 13.Given an object representing a car with properties like make, model, and year,
// write a function that returns an array of the object's keys.

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// Expected output: ['make', 'model', 'year']

// Solution:-
// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// function carKeys(car) {
//     return Object.keys(car);
// }
// console.log(carKeys(car));

// 14. Given an object representing a student with properties like name, age, and grade,
// write a function that returns an array of the object's values.

// const student = {
//     name: 'Alice',
//     age: 21,
//     grade: 'A'
// };
// Expected output: ['Alice', 21, 'A']

// Solution:-
// const student = {
//     name: 'Alice',
//     age: 21,
//     grade: 'A'
// };
// function studentValues(student) {
//     return Object.values(student);
// }
// console.log(studentValues(student));


// 15.You have an object that stores product details like name, price, and available.
// Write a function that returns an array of the object's entries (key-value pairs).

// const product = {
//    name: 'Laptop',
//    price: 999,
//    available: true
// };

// Expected output: [['name', 'Laptop'], ['price', 999], ['available', true]]

// Solution:-
// const product = {
//     name: 'Laptop',
//     price: 999,
//     available: true
// };
// function cars(product) {
//     return Object.entries(product);
//   }
//   console.log(cars(product));


// 16. You have two objects representing user details and contact information.
//  Write a function that combines these two objects into a new object.
// const userDetails = {
//     name: 'John',
//     age: 30
// };
// const contactInfo = {
//     email: 'john@example.com',
//     phone: '123-456-7890'
// };
// Expected output: { name: 'John', age: 30, email: 'john@example.com', phone: '123-456-7890' }

// Solution:-
// const userDetails = {
//     name: 'John',
//     age: 30
// };
// const contactInfo = {
//     email: 'john@example.com',
//     phone: '123-456-7890'
// };
// function cars(userDetails, contactInfo ) {
//     return Object.assign(userDetails, contactInfo);
//   }
// console.log(cars(userDetails, contactInfo));

// 17.Given an object representing a book with properties like title, author, and publishedYear,
// write a function that checks if the object has a property author.
// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     publishedYear: 1949
// };
// Expected output: true

// Solution:-
// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     publishedYear: 1949
// };

// function propertyHas(book) {
//     return book.hasOwnProperty('author');
// };
// console.log(propertyHas(book));


// 18.Given an object representing a movie with properties like title, director, and releaseYear,
//  write a function that returns the number of properties in the object.

// const movie = {
//     title: 'Inception',
//     director: 'Christopher Nolan',
//     releaseYear: 2010
// };

// Expected output: 3

// Solution:-
// const movie = {
//     title: 'Inception',
//     director: 'Christopher Nolan',
//     releaseYear: 2010
// };

// function properties(movie) {
//     return Object.keys(movie).length;
// };
// console.log(properties(movie));
