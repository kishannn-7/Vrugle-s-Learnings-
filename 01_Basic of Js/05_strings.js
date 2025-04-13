let greeting = "Hello";
let user = "Alice";

let message = greeting + ", " + user + "!";
console.log(message);

// Template literals
let msg = `${greeting}, ${user}! Welcome.`;
console.log(msg);

// String methods
console.log(user.length);
console.log(user.toUpperCase());
console.log(user.includes("lic"));
console.log(user.slice(1, 3));