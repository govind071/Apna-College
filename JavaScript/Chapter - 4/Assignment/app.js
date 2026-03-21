// Write a js program to delete all occurences of element num in a given array
// Example: if arr = [1, 2, 3, 4, 2, 5] and num = 2 then output should be [1, 3, 4, 5]

let arr = [1, 2, 3, 4, 2, 5];
let num = 2;


// Method 1: Using filter()
// let filteredArr = arr.filter((element) => element !== num);
// console.log(filteredArr);

// Method 2: Using for loop
// let resultArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== num) {
//         resultArr.push(arr[i]);
//     }
//     console.log(resultArr);
// }

// Method 3: Using splice() in reverse order
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// Write a JS program to find the no of digits in a number.
// Example: if number = 287152, count = 6
// let number = 287152;
// let count = 0;


// let copy = number
// copy = Math.floor(copy/10);


// while(copy > 0){
//     count ++;
//     copy = Math.floor(copy/10);
// }

// console.log(count)



// Write a JS program to find the sum of digits in a number.
// Example: if number = 287152, sum = 25
// let number = 287152;
// let sum = 0;

// let copy = number;

// while(copy > 0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10)
// }

// console.log(sum);



// Print the factorial fo a number n.
// [Factorial of a number is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]

// Example:
    // 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040
    // 5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 x  = 120
    // 3! (factorial of 3) = 1 x 2 x 3 = 6
    // 0! is always 1


let n = Number(prompt("Enter Number: "));
let fact = 1

for (let i = 1; i <= n; i ++){
    fact *= i;
    console.log(fact)
}

// Find the largest number in an arry with only positive numbers.
let array = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for (let i = 0; i < array.length; i++){
    if(largest < array[i])
        largest = array[i]
}

console.log(largest)