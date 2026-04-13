// JS Assignment - 7

// Qs.1: Write an arrow function named arrayAverage that accept an array of numbers and returns the average of those numbers.
const arrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

let arr = [12, 3, 3, 2];

average = arrayAverage(arr);
console.log(average);


// Qs.2: Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven = (n) => {
    if(n % 2 == 0){
        return "EVEN";
    } else {
        return "ODD";
    };
};

let num = isEven(6);
console.log(num)

//Qs.3: What is the output of the following code:
const object = {
    message: "Hello World",
    logMessage() {
        console.log(this.message); // Output: Hello World
    }
}

setTimeout(object.logMessage, 1000); // Output: undefined
// Output: undefined
// Explanation: In the above code, the setTimeout function is called with the logMessage method of the object. However, when the logMessage method is called by setTimeout, it loses its context (the value of 'this' becomes undefined). Therefore, when logMessage tries to access this.message, it returns undefined instead of "Hello World".


// Qs.4: What is the output of the following code:
let length = 4;

function callback() {
    console.log(this.length); // Output: 4
}

const object1 = {
    length: 5,
    method(callback) {
        callback(); // Output: undefined
    }
};

object1.method(callback, 1, 2);
// Output: undefined
// Explanation: In the above code, the callback function is called inside the method of object1. However, when the callback function is called, it loses its context (the value of 'this' becomes undefined). Therefore, when callback tries to access this.length, it returns undefined instead of 5. 