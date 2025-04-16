// Declaration Normal function

greet();

function greet() {
  // hoisting work in this
  console.log("Hello, Kishan!");
}

greet(); // Reference and Execution of the function

// with parameter
function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20);

function sum1(num1, num2) {
  return num1 + num2;
}

let sumOfTwo_Nums = sum1(10, 20);
console.log(`Sum of two numbers ${sumOfTwo_Nums} is Stored in variable`);

let MultiplyOfNum = function name(num1, num2) {
  // hoisting is not done in this.
  return num1 * num2;
};

console.log(MultiplyOfNum(10, 2));

function addition(num1, num2, ...rest) {
  // return num1 + num2 + rest;
  return rest; // output will be in array format.
}

console.log(addition(10, 20, 30, 40, 50));

// Arrow functions

let add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(1, 2));

// Single line statement use

let printGreet = () => console.log("Hi,welcome to arrow function");

let divideHighByLow = (num1, num2) => (num1 > num2 ? num1 / num2 : num2 / num1);

console.log(divideHighByLow(20, 50));

// IIFE -- Immediately Invoked Function Expression

((object = { user: "Kishan" }) => console.log("hello,", object.user))();

let Array = [1, 2, 3, 4, 5];

function FirstOfArr(getArr) {
  return getArr[0];
}

console.log(FirstOfArr(Array));

const User = {
  firstName: "Kishan",
  lastName: "Patel",
  fullName: this.firstName + this.lastName,
  tageline: () => `Hi, I am ${this.fullName}. Welcome to my Profile`,
};

function addPropToObject(useObject) {
  // useObject.fullName = "Alex"+this.lastName;
  useObject.lastName = "Gupta";
  useObject.city = "Unknown";
  useObject.fullName = "Alex " + useObject.lastName;
  return useObject;
}

console.log(addPropToObject(User));

// Anonymous Function -- a function without name 

console.log(
  (function (num1, num2) {
    return num1 + num2;
  })(5, 10)
);

console.log((() => 1 + 2)());

// HigherOrder Functions -- Which function take fun. as an argument Or return function.

// currying function
function multiply(a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
}

console.log("Multipliction in Higher Order Function is :",multiply(2)(3)(4));

const greetAgain = function(){
    return `Welcome to my Codespace,`    
}

function Hof(object, callback){
    return callback() + object.fullName;
}

console.log(Hof(User,greetAgain));
