const prompt = require('prompt-sync')();

let playGame = prompt("Do you want to play a game? (y/n): ");
let pickNumber = parseFloat(prompt("Enter a number: "));

if (pickNumber > 10 && pickNumber < 50) {
    console.log("Your next number should be greater than 50");
} 

let pickNumber2 = parseFloat(prompt("Enter a second number: "));

if (pickNumber2 % 2 == 0) {
    console.log("Your next number should be odd");
} else {
    console.log("Your next number should be even");
}

let pickNumber3 = parseFloat(prompt("Enter a third number: "));

console.log("Your numbers are", pickNumber + ", " + pickNumber2 + ", " + "and " + pickNumber3);

const sum = pickNumber + pickNumber2 + pickNumber3

if ((sum + 1) % 10 === 0) {
    console.log("Your numbers are Squirrelly");
} else {
    console.log("Your numbers are not Squirrelly");
}

if (pickNumber % 3 === 0 || pickNumber2 % 3 === 0 || pickNumber3 % 3 === 0) {
    console.log("Your numbers are Jazzy");
} else {
    console.log("Your numbers are not Jazzy");
}
