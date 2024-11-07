// Functions
// simple function
function hello() {
    console.log("hello have are you");
}
hello();
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
hello();//we can call the function multiple times (function hello)

//perameter function another way 

function addMessage(username) {
    return `${username} just logged in.`
}
console.log(addMessage("sohan"));
console.log(addMessage(""));// output just logged in.
console.log(addMessage());// output undefined just logged in.
hello();//we can call the function multiple times (function hello)
// const num = Number('23'); 


/*One key difference between function expressions and function declarations is that function expressions can be
anonymous, while function declarations must have a name.
*/
// Function declaration
const age1 = calcAge1(1991); //function calling

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }

  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2)
  
  ;

  
  // Function declaration
show();
  function show(){
    console.log("sohan");
  }

 // Function expression
  let sameName= function show(){
    console.log("sohan");
  }  
  sameName();