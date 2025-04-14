let num = [1,2,3,4,5,6,7,8,9,10];
let anotherNum = [...num];
console.log("Copied array:", anotherNum);

let anotherNumv2 = [...num,100,num[0],num[40]]; // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, undefined]
console.log("Modified copied array:", anotherNumv2);

let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b];
console.log("Combined array:", combined); // [1, 2, 3, 4]

console.log("Max number:", Math.max(...a, ...b)); // 4


let user = { name: "Kishan", age: 25 };
let copiedUser = { ...user };
console.log("Copied object:", copiedUser); // { name: "Kishan", age: 25 }

let obj1 = { x: 1 };
let obj2 = { y: 2 };
let merged = { ...obj1, ...obj2 };
console.log("Merged object:", merged); // { x: 1, y: 2 }


let updatedUser = { ...user, age: 30 };
console.log("Updated user:", updatedUser); // { name: "Kishan", age: 30 }
console.log("Original user:", user); // { name: "Kishan", age: 25 }

let newUser = { 
    name: "Harsh",
    age: 28,
    hobbies: ["reading", "gaming"],
    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    }
 };

 console.log("Original user:", newUser); 
 
 
 let copiedNewUser = { 
     ...newUser, 
     name: "Alex",
     age: 21, 
    //  hobbies: ["gaming", "music"], 
    //  address: { ...newUser.address, city: "vadodara" } 
    };

copiedNewUser.hobbies[0] = "music"; 
copiedNewUser.address.city = "mehsana";

console.log("Copied user:", copiedNewUser);

console.log("Original user:", newUser); 