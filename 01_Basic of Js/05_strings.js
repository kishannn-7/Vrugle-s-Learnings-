let greeting = "Hello";
let user = "Kishan";

let message = greeting + ", " + user + "!";
console.log(message);

// Template literals
let msg = `${greeting}, ${user}! Welcome.`;
console.log(msg);

// String methods
console.log(user.length); // output: 6 
console.log(user.toUpperCase()); // output: KISHAN
console.log(user.includes("lic")); // output: false
console.log(user.slice(1, 3)); // output: is


let str="    hello world    ";
console.log(str.length); // output: 17 (including spaces)
console.log(str.trim()); // output: "hello world" 
console.log(str.split(" ")); // output: ["", "", "hello", "world", "", ""] 
console.log(str.trim().split(" ")); // output: ["hello", "world"] 
console.log(str); // output: "    hello world    " 

console.log("hello".startsWith("h")); // output: true
console.log("hello".endsWith("o")); // output: true
console.log("hello".charAt(1)); // output: "e"

let Greet = "hello".concat(" ", user);

console.log(Greet);
console.log(Greet.replace("hello", "hi"));
console.log(Greet.replaceAll("h","_")); // Fill in the blanks

