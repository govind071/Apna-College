// let person = {
//     name: "Arjun",
//     age: 21,
//     isStudent: true
// };

// console.log(person) // Output: { name: 'Arjun', age: 21, isStudent: true }

// let delhi = {
//     latitude: "28.7041° N",
//     longitude: "77.1025° E"
// };

// const student = {
//     name: "shradha",
//     age: 24,
//     marks: 94.4,
//     city: "Delhi"
// }

// const item = {
//     price: 100.99,
//     discount: 50,
//     color: ["red", "pink"]
// };

// Thread / Twitter Post

// const post = {
//     username: "@shradhakhapara",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@apancollege", "@delta"]
// };

// Get Value of a key in an object
// JS automatically converts the value to string when we use it in template literal
// Even if we made the number as a key, the number will be converted to string when we access it using the key.

// For example:
// const data = {
//     1: "one",
//     2: "two",
//     true: "This is true",
//     null: "This is null",
//     undefined: "This is undefined"
// };

// const student = {
//     name: "govind",
//     age: 24,
//     marks: 94.4,
//     city: "Delhi"
// }

// // Add/ Update Value

// student.city = "Mumbai";
// student.gender = "Male";
// student.marks = "A";

// Storing informations of multiple students
// What is objects of objects?
// We can store the information of multiple students in an object where each key is the name of the student and the value is another object that contains the details of that student. This is called an object of objects.

// const students = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     shradha: {
//         grade: "A",
//         city: "Pune"
//     },
//     govind: {
//         grade: "A",
//         city: "Dhamtari"
//     }
// };

// What is an array of objects?
// We can also store the information of multiple students in an array where each element is an object that contains the details of a student. This is called an array of objects.
// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "O",
//         city: "Pune"
//     },
//     {
//         name: "govind",
//         grade: "A",
//         city: "Mumbai"
//     }
// ];

// What is Math object?
// The Math object is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions. It is not a function object, but rather a static object that cannot be instantiated. The Math object has properties like Math.PI, Math.E, and methods like Math.sqrt(), Math.pow(), Math.random(), etc.
// Math.PI // Output: 3.141592653589793
// Math.E // Output: 2.718281828459045
// Math.sqrt(16) // Output: 4
// Math.pow(2, 3) // Output: 8
// Math.random() // Output: A random number between 0 and 1

// Random Integers
// From 1 to 10
// let step1 = Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step1)
// let step4 = step3 + 1;

// console.log(step4)

// Guessing Game
const max = (prompt("enter the max number: "));
const random = Math.floor(Math.random() * max) + 1;
// console.log(random)
let guess = (prompt("Guess the Number"));

while(true){
    if(guess == "quit"){
        console.log("user quit the game...");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!!", random);
        break;
    } 
    else if(guess > random){
        guess = (prompt("Hint: your guess was too large. try again"))
    } else {
        guess = (prompt("Hint: your guess was too small. try again"))
    }
};


 