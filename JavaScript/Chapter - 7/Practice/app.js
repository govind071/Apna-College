// this Keyword in JS
// this keyword is used to refer to the current object in which the code is being executed. It can be used in different contexts, such as in a function, an object method, or a constructor function.

// Example 1: Using this in a object
// const student = {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name}'s average marks is ${avg}`);
//     }
// }

// student.getAvg(); // Output: shradha's average marks is 95
// function getAvg(){
//     console.log(this); // Output: Window object (in browser)
// }

// What is Window Object in JS
// The Window object is the global object in a web browser environment. It represents the browser window and provides properties and methods to interact with the browser and its features. The Window object is created automatically when a web page is loaded, and it serves as the global scope for JavaScript code running in that page.

// try & catch in JS
// The try...catch statement in JavaScript is used to handle exceptions and errors that may occur during the execution of code. It allows you to write code that can gracefully handle errors without crashing the entire program.

// let a = 5;
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// } catch (err){
//     console.log("caught an error.. a is not defined");
//     console.log(err)
// }
// console.log("hello2")
// console.log("hello2")

// Miscellaneous Topics
//1. Arrow Functions
// Arrow functions are a concise way to write functions in JavaScript. They are often used for shorter functions and have a different behavior with the this keyword compared to regular functions.

// const sum = (a, b) => {
//     console.log(a + b);
// }

// const cube = x => {
//     return x * x * x;
// }

// const pow = (a, b) => {
//     return a ** b;
// }

// Implicit Return in Arrow Functions
// If the function body consists of a single expression, you can omit the curly braces and the return keyword. The result of the expression will be returned automatically.
// const mul = (a, b) => {
//     a * b;
// };

// const mul = (a, b) => (a * b ); // Implicit return
// console.log(mul(3, 4)); // Output: 12

// Set Timeout
// The setTimeout function is used to execute a piece of code after a specified delay. It takes two arguments: a callback function and the delay in milliseconds.

// console.log("hi there!");

// setTimeout(() => {
//     console.log("Om Laxmi Computer");
// }, 4000);

// console.log("Welcome to");

// console.log("Hello")
// setTimeout(() =>{
//     console.log("Om Laxmi Computer")
// }, 2000)
// console.log("Welcome to")

// const greet= () => {
//    console.log("Om Laxmi Computer")
// };

// setTimeout(greet, 2000)

// Set Interval
// The setInterval function is used to execute a piece of code repeatedly at specified intervals. It takes two arguments: a callback function and the interval in milliseconds.

// let id = setInterval(() => {
//     console.log("Om Laxmi Computer");
// }, 2000);

// console.log(id)

// let id2 = setInterval(() => {
//     console.log("Welcome to");
// }, 3000);

// console.log(id2)

// clearInterval(id); // This will stop the first interval from executing further
// clearInterval(id2); // This will stop the second interval from executing further

// this with arrow functions
// Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical scope. This means that the value of this inside an arrow function is determined by where the function is defined, not where it is called.

// const student = {
//   name: "shradha",
//   age: 23,
//   marks: 95,
//   prop: this, // this will refer to the global object (Window in browsers) because it's defined in the global scope
//   getName: function () {
//     console.log(this); // this will refer to the student object because it's called as a method of the student object
//     return this.name; // this will refer to the student object because it's called as a method of the student object
//   },
//   getMarks: () => {
//     console.log(this); // this will refer to the global object (Window in browsers) because arrow functions do not have their own this context
//     return this.marks; // it is a perents scope so this will refer to the global object (Window in browsers) because arrow functions do not have their own this context
//   },
//   getInfo1: function () {
//     setTimeout(() => {
//       // console.log("Om Laxmi Computer");
//       console.log(this) // this will refer to the student object because arrow functions inherit the this value from the surrounding lexical scope, which is the getInfo1 method of the student object
//     }, 2000);
//   },
//   setInfo2: function () {
//     setTimeout(function () {
//       // console.log("Om Laxmi Computer");
//       console.log(this) // this will refer to the global object (Window in browsers) because regular functions have their own this context, and in this case, the function is called in the global scope
//     }, 2000);
//   },
// };


// Practice Qs.
// Write an arrow function that return the square of a number 'n'.
// const getSqr = (n) => n * n;


// let sqr = getSqr(12)
// console.log(sqr)

// // Write a function that print "Hello World" 5 times at intervals of 2s each.
// const printHelloWorld = () => {
//   let count = 0;
//   const interval = setInterval(() => {
//     console.log("Hello World");
//     count++;
//     if (count === 5) {
//       clearInterval(interval);
//     }
//   }, 2000);
// };

// printHelloWorld();

let id = setInterval(()=> {
  console.log("Hello World");
}, 2000);

setTimeout(()=> {
  clearInterval(id);
  console.log("Clear Interval ran");
}, 10000);