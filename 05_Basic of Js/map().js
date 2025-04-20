let numbersArray = [1, 2, 3, 4, 5];

// +++++++++++++++++++++++++++++ IMPORTANT ++++++++++++++++++++++++++++++

// These methods are return value: map, filter, reduce, find, every, some, sort, slice, splice
// These methods are not return value: push, pop, shift, unshift, reverse, fill, copyWithin

let squaredArray = numbersArray.map(function (number) {
  return number * number;
});

console.log("Original Array:", numbersArray);      
console.log("Squared Array:", squaredArray);      // This will return a new array with squared values 

// Using arrow function
let doubleArray = numbersArray.map(num => num * 2);
console.log("Doubled Array:", doubleArray);        

// Mapping through array of objects
let users = [
  { firstName: "Kishan", age: 25 },
  { firstName: "Alex", age: 30 },
  { firstName: "Rahul", age: 22 }
];

// Extract only names
let userNames = users.map(user => user.firstName);
console.log("User Names:", userNames);             

// Create a new array of formatted strings
let userDescriptions = users.map(user => {
  return `${user.firstName} is ${user.age} years old.`;
});
console.log("User Descriptions:", userDescriptions);

const obj ={ 
  firstName: "Kishan",
  age: 25 
};

// This will give an error because map() is not a method of object. ++++++++++++

// let mapedObj = obj.map((user) => {
//   return `${user.firstName} is ${user.age} years old.`;} 
// );


// but we can use Object.keys() to iterate over the object keys and values. Because map() is a method of array.

let mapedObj2 = Object.keys(obj).map((key) => {
  return `${Object.keys(obj).indexOf(key)}-${key}`;
})

console.log(mapedObj2);

