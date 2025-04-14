let now = new Date();
console.log(now);

let birthday = new Date("2000-05-15");
console.log(birthday);

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth()); // 0-based (0 = Jan)
console.log("Date:", now.getDate());
console.log("Hours:", now.getHours());

// Time difference in ms
let diff = now - birthday;
console.log("Milliseconds since birthday:", diff);

// Convert ms to years
let age = diff / (1000 * 60 * 60 * 24 * 365);
console.log("Age is approx:", Math.floor(age));

console.log(now.toLocaleTimeString()); 

console.log(now.toLocaleString()); // Output: 5/15/2000, 12:00:00 AM
