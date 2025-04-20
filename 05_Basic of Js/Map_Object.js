// ++++++++++++++++ Map +++++++++++++++ 

let userMap = new Map();

// Map key can be of any type (primitive or object) ************ Important ************

// Setting key-value pairs
userMap.set("firstName", "Kishan");
userMap.set("lastName", "Patel");
userMap.set("age", 25);
userMap.set("isLoggedIn", true); 
userMap.set("greet", () => "Hello, Kishan!");

// Getting values
console.log(userMap.get("firstName"));         // Kishan
console.log(userMap.get("greet")());           // Hello, Kishan!

// Checking if a key exists
console.log(userMap.has("age"));               // true

// Size of the map
console.log("Total Entries:", userMap.size);   // 5

// Iterating through a Map
for (let [key, value] of userMap) {
  console.log(`${key} => ${value}`);
}

// keys as a Object
let user1 = { id: 1 };
let user2 = { id: 2 };

let loginStatus = new Map();
loginStatus.set(user1, true);
loginStatus.set(user2, false);

console.log("User1 Logged In:", loginStatus.get(user1));  // true
console.log("loginStatus(Map):", loginStatus)

// Delete a key
userMap.delete("age");
console.log(userMap.has("age")); 

console.log(userMap);

// Clear the entire map
// userMap.clear();
