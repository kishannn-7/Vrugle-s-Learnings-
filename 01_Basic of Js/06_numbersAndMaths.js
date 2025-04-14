let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log((x / y).toFixed(2));
console.log(x % y);
console.log(x ** y); // Exponentiation

// Math object
console.log(Math.pow(2, 3));

console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.random());

let dice = (function () {
    return Math.floor(Math.random() * 6) + 1;
})();

console.log(dice);

