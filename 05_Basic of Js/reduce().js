// Sum of prices

let prices = [100, 200, 300, 150];

let totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
console.log("Total Price:", totalPrice); // 750

// Highest mark

let marks = [65, 98, 78, 89, 70];

let highestMark = marks.reduce((max, curr) => (curr > max ? curr : max), marks[0]);
console.log("Highest Mark:", highestMark); // 98

// Count each fruit
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCount = fruits.reduce((acc, fruit) => {
acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit Count:", fruitCount); // { apple: 3, banana: 2, orange: 1 }

// Convert user array into object

let users = [
    { id: 1, name: "Kishan" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Rahul" },
];

let userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
console.log("User Map:", userMap); // { '1': 'Kishan', '2': 'Alex', '3': 'Rahul' }
