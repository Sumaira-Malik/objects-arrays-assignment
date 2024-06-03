// --------------------------------------Assignment 2:Manipulating an Array: Rearranging Words---------------------------
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
import chalk from "chalk";
console.log(chalk.green('\t \n /////////////////////// Arrange this scrambled array ////////////////////////////\n \t'));
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
console.log(chalk.cyan(`ScrambedArray is : ${scrambledArray}`));
// Remove elements (true,123,"am","a") with splice  method
scrambledArray.splice(2, 4);
console.log(chalk.blue(scrambledArray));
// Remove last element of array with pop method 
scrambledArray.pop();
console.log(chalk.gray(scrambledArray));
// Add elements ("I") with unshift method
scrambledArray.unshift("I");
console.log(chalk.italic(scrambledArray));
// Add elements ("am","a") with splice method 
scrambledArray.splice(1, 0, "am", "a");
console.log(chalk.red(scrambledArray));
// To combine elements back to a single string ("I am a student of GIAIC")
const result = scrambledArray.join(" ");
console.log(chalk.underline(`\n Final result is: \n`));
console.log(chalk.magenta(`\n ${result} \n`));
