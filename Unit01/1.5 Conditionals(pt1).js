
const prompt = require('prompt-sync')();
let age = prompt("What is your age? ");

if (parseInt(age)>=50) {
    console.log("You qualify for the senior discount!");
  }
else if (parseInt(age)<=16)
    console.log("You're not old enough to drive yet.");
else 
  console.log("You are more than 16 but less than 50")

  //user_name

  let user_name = prompt("What is your name? ");

  if (user_name == "Mr.J") {
    console.log("🐠");
  }
else if (user_name.length > 7)
    console.log("You have a long name");

//random

let character = prompt("How many characters is your name? ");

if (character == user_name.length) {
    console.log("That's correct! ✔️");
  }
else if (character > user_name.length)
    console.log("Too high ✖️");
else if (character < user_name.length)
    console.log("Too low ✖️");


