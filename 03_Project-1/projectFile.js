// Create an array of numbers from 1 to 10 and print the first and last element.---------------------------------------
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`First element: ${arr1[0]} Last element: ${arr1[arr1.length - 1]}`);


// How do you add an element to the end and beginning of an array?------------------------------------------------
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.push(0)); // add 0 to the end of the array
console.log(arr2.unshift(0)); // add 0 to the beginning of the array
console.log(arr2); // Output: [0, 1, 2, 3, 4, 5, 0]


// Remove the last element from an array and print the modified array.---------------------------------------------
console.log(arr2.pop());
console.log(arr2); // Output: [0, 1, 2, 3, 4, 5]


// Given an array: ["apple", "banana", "orange"], check if "banana" exists in the array.
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));


// Write an object to represent a car with properties like brand, model, and year.
let car = {
    brand: "Honda",
    model: "Amaze",
    year: 2020
};


// Add a new property (color) to an existing object dynamically.
car.color = "Yellow";


// Given an object { name: "John", age: 25 }, delete the age property.
let person = {
    name: "John",
    age: 25
};

delete person.age;
console.log(person);

