// let arr = [7, 9, 0, -2];
// let n = 3;

// ans 1
// let ans = arr.splice(0, n);
// console.log(ans)


// ans 2

// console.log(arr.length - n)

// let ans = arr.splice(arr.length - n) //4 -1
// console.log(ans)

// let str = prompt("Pease enter a string");

// if(str){
//     console.log("Not Empty")
// } else(
//     console.log("Empty String")
// )

// let char = "OmLaxmiComputer";
// let idx = Number(prompt("Enter Index Number"));

// if(char[idx] === char[idx].toLowerCase()){
//     console.log(`${idx}, idx char: ${char[idx]} is lower case`);
// } else{
//     console.log(`${idx}, ${char[idx]}: "char is upper case"`);
// };

// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

let arr = ["Hello", "govind", "a", 23, 64, 99, -61];
let item = 64;

if(arr.indexOf(item) != -1){
    console.log("element exists in array");
} else{
    console.log("element not exists in array");
};