//Truthy values : true, {}, [], 1, " ", "string", -1

//Falsy values : false, null, undefined, 0, NaN, "", -0, 0n, -0n.

// str = "";
if ("") {
  console.log("the empty string is truthy");
} else {
  console.log("the empty string is falsy");
}

// object = {};
if ({}) {
  console.log("the empty object is truthy");
} else {
  console.log("the empty object is falsy");
}

// aray = [];
if (![]) {
    console.log("the empty array is falsy");
} else {
    console.log("the empty array is truthy");
}

// null

// null is a falsy value
console.log(null ? "null is truthy" : "null is falsy");

// undefined is a falsy value
console.log(undefined ? "undefined is truthy" : "undefined is falsy");

// NaN (Not-a-Number) is a falsy value
console.log(NaN ? "NaN is truthy" : "NaN is falsy");


console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof 0n); // bigint


let zeroCheck = 0 ? "0 is truthy" : "0 is falsy";
console.log(zeroCheck);

let zeroBigIntCheck = 0n ? "0n is truthy" : "0n is falsy";
console.log(zeroBigIntCheck);

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);