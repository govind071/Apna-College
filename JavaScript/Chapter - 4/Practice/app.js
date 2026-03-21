// What is loop?
// A loop is a programming construct that allows you to repeat a block of code multiple times. It helps to automate repetitive tasks and can be used to iterate over data structures, perform calculations, or execute a set of instructions until a certain condition is met.

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// What is for loop?
// A for loop is a control flow statement that allows you to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and update. The loop will continue to execute as long as the condition is true, and the update is executed after each iteration.

// for loop syntax
// for(initialization; condition; update){
//     // code to be executed
// }

// Example of a for loop that prints numbers from 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i = i - 3) {
//   console.log(i);
// }

// print odd numbers from 1 to 15
// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }

// print even numbers from 2 to 10
// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

// print even numbers from 100 to 2

// for (let i = 100; i >= 2; i = i - 2) {
//   console.log(i);
// }

// what is infinite loop?
// An infinite loop is a loop that continues to execute indefinitely because the terminating condition is never met. This can lead to a program that becomes unresponsive or consumes excessive resources. It is important to ensure that loops have a proper exit condition to avoid infinite loops.

// for (let i = 1; i > i >= 0; i++) {

// }

// for (let i = 1; i <= 5; i--) {

// }

// for (let i = 1; ; i++) {

// }

// Print the multiplication table of 5 using a for loop
// let n = prompt("write your number");
// n = parseInt(n)
// for(let i = 1; i <= 10; i++){
//   console.log(`${n} x ${i} = ${n * i}`);
// };

// Nested for loop
// A nested for loop is a loop that is contained within another loop. The inner loop will execute completely for each iteration of the outer loop. This is useful for iterating over multi-dimensional data structures, such as arrays or matrices.
// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop iteration: ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// };

//while loop
// A while loop is a control flow statement that allows you to execute a block of code as long as a specified condition is true. The condition is evaluated before each iteration, and if it evaluates to false, the loop will terminate.
// while loop syntax
// while(condition){
//     // code to be executed
// }

// Example of a while loop that prints numbers from 1 to 5
// let i = 1;

// while(i <= 5){
//   console.log(i);
//   i++
// }

// console.log(i) //Output: 6

// guess favorite movie

// const fav_movie = "Spider Man";
// let guess = prompt("guess the movie name:");

// while((guess != fav_movie)&&(guess != "quit")){
//   guess = prompt("wrong guess. please try again")
// }

// if(guess == fav_movie){
//   console.log("Congrats!!")
// } else {
//   console.log("you quit.")
// };

// break keyword
// The break keyword is used to exit a loop prematurely. When the break statement is encountered, the loop will immediately terminate, and the program will continue with the next statement after the loop.

// let i = 1;

// while(i <= 5){
//   console.log(i);
//     if(i == 3){
//         break;
//     }
//   i++
// }

// const fav_movie = "Spider Man";
// let guess = prompt("guess the movie name:");

// while(guess !== fav_movie){
//   if(guess == "quit"){
//     console.log("you quit");
//     break;
//   }
//   guess = prompt("wrong guess. please try again")
// }

// if(guess == fav_movie){
//   console.log("congrats!!");
// };

// Loops with Arrays
// When working with arrays, loops are commonly used to iterate over the elements of the array and perform operations on them. This allows you to access and manipulate each element in the array efficiently.

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for (let i = fruits.length; i > 0; i--) {
//   console.log(i - 1, fruits[i - 1]);
// }


// Nested for loop with arrays
// When working with multi-dimensional arrays (arrays of arrays), nested for loops are often used to access and manipulate the elements within the inner arrays. The outer loop iterates over the main array, while the inner loop iterates over each sub-array.
// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder woman", "flash"]];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(`List #${i}`);
//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(`j = ${j}, ${heroes[i][j]}`);
//   }
// }


// let student = [["aman", 95], ["shradha", 94.4], ["govind", 89]];

// for(let i = 0; i < student.length; i++){
//   console.log(`info of student #${i + 1}`)
//   for(j = 0; j < student[i].length; j++){
//     console.log(`${student[i][j]}`)
//   }
// }


// What is for of loop?
// The for of loop is a newer syntax in JavaScript that provides a more concise and readable way to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It allows you to directly access the values of the iterable without needing to manage an index variable.

// for of loop syntax
// for(variable of iterable){
//     // code to be executed
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orage"];

// for(fruit of fruits){
//   console.log(fruit);
// }

// for(char of "omlaxmicomputer"){
//   console.log(char);
// }


// Nested for of loop
// When working with multi-dimensional arrays or nested data structures, you can use nested for of loops to iterate over each level of the structure. The outer loop will iterate over the main array, while the inner loop will iterate over each sub-array or nested structure.

// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder woman", "flash"]];

// for(list of heroes){
//   for(hero of list){
//     console.log(hero)
//   }
// }



// Todo App 

let todo = [];

let req = prompt("please enter your requist");
console.log(req);

while(true){
  if(req == "quit"){
    console.log("you quit the app...")
    break;
  }
  if (req == "list") {
    console.log("____________________________");
    for(let i = 0; i<todo.length; i++){
      console.log(i, todo[i]);
    }
    console.log("________________________");
  }
   else if (req == "add"){
    let task = prompt("please enter your task");
    todo.push(task)
    console.log("task added");
  } 
  else if(req == "delete"){
    let idx = prompt("please enter task you want to delete");
    let del = todo.splice(idx, 1);
    console.log(del)
  } else {
    console.log("invalid requist. please try again.")
  }
  req = prompt("please enter your requist");
}
