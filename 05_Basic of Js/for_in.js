

// Loop through object keys

let user = {
    name: "Kishan",
    age: 25,
    city: "Bharuch"
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}

// Loop through array indices
let marks = [90, 80, 70];

for (let index in marks) {
  console.log(`Index ${index} has mark: ${marks[index]}`);
}

//Loop through string characters

let str = "Kishan";

for (let index in str) {
  console.log(`Character at index ${index} is: ${str[index]}`);
}

  