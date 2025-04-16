// +++++++++  IF-ELSE +++++++++++

let age = 18;
if (age >= 18) {
  console.log("You can vote!");
}

let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}


if (!isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}

let str = "";
// let str = "Kishan";  // with this Output : String has some value
// let str = " ";    // with this Output : String has some value

if (!str){
    console.log("String is empty");
} else {
    console.log("String Has some value");
}

// Ladder

let marks = 75;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

// Nested if
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  } else {
    console.log("Get a license first.");
  }
} else {
  console.log("You are too young to drive.");
}

// Ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

