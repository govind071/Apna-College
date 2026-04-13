// Write a JavaScript function that returns array elements larger than a given number.
// let arr = [5, 3, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// // elements larger than a number num
// function getElements(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }

// // Example usage:
// getElements(arr, num);

// Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh", ans = "abcdefgh"
// function getUniqueCharacters(str) {
//     let uniqueChars = "";
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i])
//         if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//             uniqueChars += str[i];
//             console.log(str[i])
//         }
//     }
//     return uniqueChars;
// }

// // Example usage:
// let str = "abcdabcdefgggh";
// console.log(getUniqueCharacters(str));

// WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.Example:country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"
// function getLongestCountryName(countries) {
//   let longestName = "";
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].length > longestName.length) {
//             longestName = countries[i];
//         }
//     }
//     return longestName;
// }

// // Example usage:
// let countries = ["Australia", "Germany", "UnitedStatesofAmerica"];
// console.log(getLongestCountryName(countries)); // Output: "UnitedStatesofAmerica"

// WriteaJavaScriptfunctiontocountthenumberofvowelsinaStringargument.Example:str="HelloWorld",output:3
// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// // Example usage:
// let str = "HelloWorld";
// console.log(countVowels(str)); // Output: 3

// WriteaJavaScriptfunctiontogeneratearandomnumberwithinarange(start,end).Example:start=1,end=10,output:5
function generateRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Example usage:
let start = 1;
let end = 6;
console.log(generateRandomNumber(start, end)); // Output: A random number between 1 and 10