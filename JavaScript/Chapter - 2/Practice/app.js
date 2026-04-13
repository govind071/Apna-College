// // Artithmetic Operators
// let a = 10;
// let b = 5;

// console.log(`Sum of a + b is: ${a + b}`)
// console.log(`sub of a - b is: ${a - b}`)
// console.log(`mul of a * b is: ${a * b}`)
// console.log(`div of a / b is: ${a / b}`)
// console.log(`rem of a % b is: ${a % b}`)
// console.log(`power of a ** b is: ${a ** b}`)


// // Unary Operators
// console.log(a++); //10
// console.log(++a); //12



// // Comparison Operatiors
// let age = 17;

// console.log("Your are eligible: ",age >= 18)

// ++age;
// console.log(age)
// console.log("Your are eligible: ",age >= 18)


// Conditional Statements
// let firstName = "Govind";
// if(firstName == "Govind"){
//     console.log(`Welcome, ${firstName}`);
// }



// Practice Qs
// Create a trafic light system that shows what to do besed on color.

// let traficColor = "Red"

// if(traficColor === "Green"){
//     console.log("Signal is Green Go...")
// };

// if(traficColor === "Red"){
//     console.log("Signal is Red Stop.")
// };

// if(traficColor === "Yellow"){
//     console.log("Signal is Yellow Slow Down!")
// };

// let marks = 96;

// if(marks >= 80){
//     console.log("A+")
// } else if(marks >= 60){
//     console.log("A")
// } else if(marks >= 45){
//     console.log("B")
// } else if(marks >= 33){
//     console.log("C")
// } else if(marks < 33){
//     console.log("D")
// }

// else{
//     console.log("NOTHING!")
// }

// let age = 18;

// if(age >= 18){
//     console.log("you can vote.");
// } else{
//     console.log("you can not vote.");
// };

// let color = "green";

// if(color === "red"){
//     console.log("Stop.");
// } else if (color === "green"){
//     console.log("Go...");
// } else if (color === "yellow"){
//     console.log("slow!");
// } else{
//     console.log("trafic light is broken!")
// }


// Practice Qs
// Qs. Create a system to calculate popcorn prices based on the size customer asked for:
    // if size is ‘XL’, price is Rs. 250
    // if size is ‘L’, price is Rs. 200
    // if size is ‘M’ price is 100
    // if size is ‘S’, price is 50

// let size = "XL";

// if(size === "XL"){
//     console.log(`You purchase '${size}'size popcorn price is: 250`)
// } else if(size === "L"){
//     console.log(`You purchase '${size}' size popcorn price is: 200`)
// } else if(size === "M"){
//     console.log( `You purchase '${size}' size popcorn price is: 100`)
// } else{
//     console.log(`You purchase '${size}' size popcorn price is: 50`)
// }





// Qs. A “good string” is a string that starts with the letter ‘a’ & has a length > 3. Write a program to find if a string is good or not.

// let string = "apple";

// if((string[0] === 'a') && string.length > 3){
//     console.log("Good String")
// } else {
//     console.log("Not Good")
// }


// let num = 12;

// if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
//     console.log("safe");
// } else{
//     console.log("unsafe")
// }

// Truthy & Falsy

// if(""){
//     console.log("it has true value"); //can't run
// } else{
//     console.log("it has false value"); // run
// }

// if(" "){
//     console.log("it has true value") //run 
// } else{
//     console.log("it has false value") //can't run
// }


// let str = "";

// if(str){
//     console.log("string is not empty");
// } else{
//     console.log("string is empty")
// }

// str = " "

// if(str){
//     console.log("string is not empty")
// } else{
//     console.log("string is empty")
// }

// let val = 0;

// if(val){
//     console.log("value is not equal to 0");
// } else{
//     console.log("value is equal to 0")
// }


// Switch Statement

// let color = "red";

// switch(color){
//     case "red":
//         console.log(color, "stop!");
//         break;
//     case "yellow":
//         console.log(color, "slow");
//         break;
//     case "green":
//         console.log(color, "GO!");
//         break;
//     default:
//         console.log("Broken Light!");
// }

// console.log("after switch stt");


// Practice Qs
// Qs. Use switch statement to print the day of the week using number variable ‘day’ with 

// Values 1 to 7

// 1 = Monday, 2 = Tuesday & so on

// let day = 7;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;  
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday ")
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day please enter only 1 to 7");
// };


alert("this is an alert msg");

console.log("this is simple log");

console.error("this is an error msg");

console.warn("this is a warning msg");

let firstName = prompt("Enter your name: ");
let lastName = prompt("Enter your last name: ");

console.log("Welcome", firstName,lastName,"!")


