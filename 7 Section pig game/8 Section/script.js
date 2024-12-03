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
function a(b){
    const age = 2024-b
    return age
}
const c = d(1991)
console.log(c)// this is global scope



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

