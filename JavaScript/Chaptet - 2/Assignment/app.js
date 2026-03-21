let num = 20;

if(num % 10 == 0){
    console.log("Good!")
} else{
    console.log("Bad!")
}

let user = prompt("Enter user name: ");
let age = prompt("Enter your age: ");

console.log(`Welcome, ${user} you are: ${age} years old.`);



let quarter = 1;
switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, Jun");
        break;
    case 3:
        console.log("July, Augast, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("you have only 4 quarter");
};



let str = prompt("Enter Your String");

if((str[0] === 'a' || str[0] === 'A') && str.length > 5){
    console.log("Good String");
} else {
    console.log("Bad String")
}


let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let c = Number(prompt("Enter third number: "));

if(a > b){
    if(b > c){
        console.log(`a: ${a}, b: ${b} and c: ${c}, their are 'a' is greather than b and c`);
    } else{
        console.log(`a: ${a}, b: ${b} and c: ${c}, their are 'c' is greather than a and b`);
    }
} else {
    if(b > c){
        console.log(`a: ${a}, b: ${b} and c: ${c}, their are 'b' is greather than a and c`);
    } else{
        console.log(`a: ${a}, b: ${b} and c: ${c}, their are 'c' is greather than a and b`);
    }
}

let num1 = Number(prompt("Enter a number: "));
let num2 = Number(prompt("Enter a number: "));


if(num1 % 10 === num2 % 10){
    console.log("last digit is same")
} else{
    console.log("last digit is not equal")
}