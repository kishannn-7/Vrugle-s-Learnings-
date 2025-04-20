// +++++++++++++++++++++  Loop and Iterations ++++++++++++++++++++++

// These loop on datatypes are not returning value: forEach, for..of, for..in
// These loop on datatypes are returning value: map, filter, reduce.

// while loop

// let i = 1;
// while (i <= 5) {
//   console.log(`Count: ${i}`);
//   i++;
// }

// do while loop
let i=1;
do {
  console.log(`Count: ${i}`);
  i++;
} while (i <= 5);


// For loop
for (let i = 1; i <= 5; i++) {

    console.log(`Count: ${i}`);

  }

// for loop with string

let str = "Kishan";

for(let i = 0; i < str.length; i++) {
    console.log(`Character: ${str[i]} at index ${i}`);
}

// for loop with array
  
let myArr = [1,2,3,4,5];

for (let i = 0; i < myArr.length; i++) {
    console.log(`Element: ${myArr[i]} at index ${i}`);
}

// for loop with object

let obj = {
    name: "Kishan",
    course: "B.Tech CE",
    project: "Basic of Js",
    age: 25,
    city: "Visnagar",
    country: "India"
}

for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(`Key: ${Object.keys(obj)[i]} , Value: ${obj[Object.keys(obj)[i]]}`);
}

// This is the good but not better way to iterate the object for object You should use (for...of/for...in) loop.