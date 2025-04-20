// for...of loop is used to iterate over iterable objects like arrays, strings etc.

// It don't return anything or change the original array.


let greetings = ["Hi", "Hello", "Welcome", "Hey"];

for (let greet of greetings) {
    console.log("Greeting:", greet);
}

// Loop through string
let Name = "Kishan";

for (let ch of Name) {
    console.log("Character:", ch);
}

// Loop through Set (unique values only)
let userSet = new Set(["Kishan", "Alex", "Kishan", "Rahul"]);

for (let user of userSet) {
    console.log("User from Set:", user);
}

// Loop through array with logic

let scores = [90, 85, 78, 99];

for (let score of scores) {
  if (score >= 90) {
    console.log("Top Scorer:", score); 
  }
}
