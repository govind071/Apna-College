// What is function in JS?
/* Functions are reusable blocks of code that perform a specific task.
 * They help organize code, reduce repetition, and make programs easier to maintain.
 * Functions can accept parameters and return values.
 */

// function hello() {
//     console.log("Hello")
// }

// // Print Name
// function printName(){
//     console.log("Om Laxmi Computer");
//     console.log("Govind Sinha");
// };

// // Loops in function
// function print1to5(){
//     for(let i = 1; i <=5; i++){
//         console.log("Govind");
//     };
// };

// function isAdult(){
//     let age = 18;
//     if (age >= 18){
//         console.log("Adult");
//     } else {
//         console.log("not adult");
//     }
// }

// print1to5()
// printName();
// hello();

// Create a function that print a poem.
// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// };

// printPoem();

// Create a Function to roll a dice & always display the value of the dice (1 to 6).
// function rollDice(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random);
// };

// rollDice();
// rollDice();
// rollDice();
// rollDice();

// What is argument in JS?
// Arguments are the values passed to a function when it is called. They are used to provide input to the function, allowing it to perform its task based on the provided data. In JavaScript, you can pass any number of arguments to a function, and they can be of any type (e.g., numbers, strings, objects).
// function printName(name){
//     console.log("Hello,", name);
// };

// printName("Aman")

// function printInfo(name, age, city){
//     console.log(`Hi, ${name} you are: ${age} years old and you live in ${city}`);
// };

// printName("Govind", 24, "Dhamtari");

// print sum
// function sum(a, b){
//     console.log(a + b);
// };

// sum(1, 2);
// sum(4, 5);
// sum(9, 6);

// Create a Function that gives us the average of 3 numbers.

// function calcAvg(a, b, c){
//     let sum = a + b + c;
//     let avg = sum / 3;
//     console.log(avg);
// };

// calcAvg(2, 4, 6);

// Create a Function that prints the multiplication table of a number.

// function printTable(num){
//     let i = 1;
//     while(i <= 10){
//         console.log(i * num)
//         i++;
//     }
// }

// printTable(5)

// Print Table of n
// function printTable(n){
//     for(let i = n; i <= n*10; i+= n){
//         console.log(i);
//     };
// }

// Return keyword in JS
// The return keyword is used in a function to specify the value that should be returned to the caller when the function is executed. When a return statement is encountered, the function execution stops, and the specified value is sent back to the caller. This allows functions to produce output that can be used elsewhere in the program.

// function sum(a, b){
//     return a + b;
// }

// sum(3, 4);

// let s = sum(3, 4);
// console.log(s);

// console.log(sum(3, 4))
// console.log(sum(sum(1, 2), 3))

// after return statement, no code will be executed in the function
// function test(a, b){
//     console.log("Hello");
//     return a + b;
//     console.log("World");
// }

// function isAdult(age){
//     if (age >= 18){
//         return "adult";
//     } else {
//         return "not adult";
//     }
//     console.log("bye bye!")
// };

// Practice Qs.
// Create a Function that returns the sum of numbers from 1 to n.
// function getSum(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
//     console.log(sum)
// }

// Create a Function that returns the concatenation of all the strings in an array.
// let str = ["Hi", "Hello", "bye", "!"];

// function concat(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         result += str[i]
//     }
//     return result;
// }

// Scope in JS
// Global Scope: Variables declared outside of any function or block are accessible from anywhere in the code.
// let sum = 54; //Global Scope

// Function Scope: Variables declared inside a function are only accessible within that function. They cannot be accessed from outside the function.
// function calcSum(a, b){
//     let sum = a + b; //Function Scope
//     return sum;
// }

// console.log(calcSum(1, 3))

// Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a loop) are only accessible within that block.

// Lexical Scope: Functions can access variables from their parent scope, even if the parent scope is not the global scope. This is known as lexical scoping.
// function outer(){
//     let name = "Govind";
//     function inner(){
//         console.log(name); // inner function can access name variable from outer function
//     }
//     inner();
// }

// Practice Qs
// What will be the output

// let greet = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreen(){
//         console.log(greet);
//     }
//     innerGreen()
// }

// console.log(greet);

//What is Function Expressions?
// Function expressions are a way to define functions in JavaScript by assigning them to variables. They can be anonymous (without a name) or named. Function expressions are not hoisted, meaning they cannot be called before they are defined in the code.

// Anonymous Function Expression
// let greet = function(){
//     console.log("Hello");
// }

// const sum = function(a, b){
//     return a + b;
// }

// sum(2, 3);

// let getSum = (a, b)=>{
//     let sum = a + b;
//     return sum;
// }

// getSum(4, 5);

// Higher Order Functions: Functions that can take other functions as arguments or return functions as their result are called higher-order functions. They are a fundamental concept in functional programming and allow for more flexible and reusable code.

// function multipleGreet(func, n){ //Higher order function that takes another function as an argument
//     for(let i = 1; i <= n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Hello");
// };

// multipleGreet(greet, 20);
// multipleGreet(greet(), 20) // This will not work because greet() will execute the function and pass undefined to multipleGreet

// multipleGreet(function(){ console.log("Namaste")}, 10) // Anonymous function expression passed as an argument to higher order function

// Return a function from another function
// function oddEvenTest(request) { //Factory function that returns different functions based on the request
//   if (request == "odd") {
//     let odd = function (n) {
//       console.log(!(n % 2 == 0));
//     }
//     return odd;
//   } else if (request == "even") {
//     let even = function (n) {
//       console.log(n % 2 == 0);
//     }
//     return even;
//   } else {
//     console.log("Invalid Request");
//   }
// }

 
// Methods in function
// Methods are functions that are properties of an object. They are used to perform actions on the object or to access and manipulate the object's data. In JavaScript, methods are defined as functions within an object and can be called using the dot notation.

// const calculator = {
//     add: function(a, b){
//         return a + b;
//     },
//     subtract: function(a, b){
//         return a - b;
//     },
//     multiply: function(a, b){
//         return a * b;
//     },
//     divide: function(a, b){
//         if (b != 0){  
//             return a / b;
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//             return null;
//         }
//     }
// };

// Methods shorthand
const calculator = {
  add(a, b){
    return a + b;
  },
  sub(a, b){
    return a - b;
  }
}

