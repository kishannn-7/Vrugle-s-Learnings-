// ++++++++++++++    OBJECT DESTRUCTURING ++++++++++++++   


const user = {
    name: "Alex",
    age: 25,
    country: "Canada"
  };
  
  const { name, age, country } = user;
  console.log(name);     // Alex
  console.log(age);      // 25
  console.log(country);  // Canada
  
  
  const { name: userName, age: userAge } = user;
  console.log(userName); // Alex
  console.log(userAge);  // 25
  

  const { city = "Unknown" } = user;
  console.log(city); // Unknown
  
  console.log(user); // Destructuring doesn't change original data. -------------------------------------
  

  const employee = {
    id: 101,
    personal: {
      firstName: "Kishan",
      lastName: "Patel"
    }
  };
  

  const {
    personal: { firstName, lastName }
  } = employee;
  console.log(firstName); // Kishan
  console.log(lastName);  // Patel
  


  function printUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
  }
  printUser(user); // Alex is 25 years old.
  
  


  // +++++++++++++++   ARRAY DESTRUCTURING +++++++++++++++  
  
  
  const fruits = ["apple", "banana", "cherry"];
  const [a, b, c] = fruits;
  console.log(a);
  console.log(b); 
  console.log(c); 
  
  const [first, , third] = fruits;
  console.log(first);
  console.log(third); 
  

  const numbers = [5];
  const [x = 1, y = 2] = numbers;
  console.log(x); // 5
  console.log(y); // 2
  
  // Swapping variables

  let p = 10, q = 20;
  [p, q] = [q, p];
  console.log(p); // 20
  console.log(q); // 10
  
  // Nested Array

  const nested = [1, [2, 3]];
  const [i, [j, k]] = nested;
  console.log(i); // 1
  console.log(j); // 2
  console.log(k); // 3
  
  // Rest operator

  const [one, ...rest] = fruits;
  console.log(one); // apple
  console.log(rest); // ['banana', 'cherry']
  
  
  