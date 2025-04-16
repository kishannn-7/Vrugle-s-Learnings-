
var message = "Hello, Kishan!";

function printMessage() {
  console.log(message); 
}

printMessage();
console.log(message); 




function sumFunction() {
  let sumResult = 10 + 20;
  console.log("Inside Function Scope:", sumResult);
}
sumFunction();
// console.log(sumResult);



{
  let blockVariable = "I'm scoped to this block";
  const anotherBlockVar = "Me too!";
  console.log(blockVariable);
  console.log(anotherBlockVar);
}
// console.log(blockVariable); 
// console.log(anotherBlockVar); 


if (true) {
  var globalInsideIf = "var leaks out of block";
  let localLet = "let is block scoped";
}
console.log(globalInsideIf); 
/// console.log(localLet);



function greetOuter() {
  let greetName = "Kishan";

  function greetInner() {
    console.log("Hi,", greetName); 
  }

  return greetInner;
}

const callGreetInner = greetOuter();
callGreetInner(); // Hi, Kishan




let userName = "Kishan";

{
  let userName = "Alex"; // shadows outer
  console.log("Inside Block:", userName); // Alex
}

console.log("Outside Block:", userName); // Kishan



function fullNameMaker() {
  const firstName = "Kishan";
  const lastName = "Patel";

  function combineNames() {
    return firstName + " " + lastName;
  }

  return combineNames();
}

console.log("Full Name is:", fullNameMaker());


const User = {
  firstName: "Kishan",
  lastName: "Patel",
  tagLine: () => `Hi, I am ${this.firstName} ${this.lastName}`,
};

function updateUser(user) {
  const city = "Bharuch";
  user.city = city;
  return user;
}

console.log(updateUser(User));
