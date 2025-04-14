// array--------------------------------------------------

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods -------------------------------

myArr.push(6) // 6 added to the end
myArr.push(7) // 7 added to the end
myArr.pop()  // 7 removed from the end
myArr.unshift(9) // 9 added to the start
myArr.shift() // 9 removed from the start

console.log(myArr.includes(9)); 
console.log(myArr.indexOf(3));

const newArr = myArr.join("__")

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("Orignal ", myArr);

const myn1 = myArr.slice(1, 3) // take a copy of array from 1 to 3

console.log(myn1);
console.log("slice ", myArr);


const myn2 = myArr.splice(1, 3)  // remove 3 elements from index 1 to 3
console.log("splice ", myArr);
console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // this will add the dc_heros array to the marvel_heros and make it a 2D array

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // like this we can access the dc_heros array

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread operator

console.log(...all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

// Important
console.log(Array.from({name: "hitesh"})) // interesting
console.log(Array.from({name: "hitesh", length: 1})) // interesting
console.log(Array.from({0: "hitesh", length: 1})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));