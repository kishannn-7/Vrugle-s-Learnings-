// To Number
let str1 = "123";
console.log(typeof str1);

let strToBool = Boolean(str1);
console.log(strToBool);// true

let emptyStr = "";
strToBool = Boolean(emptyStr);
console.log(strToBool);// false

let num1 = Number(str1); 
console.log(num1);
console.log(typeof num1);

// To String
let bool1 = true;
console.log(typeof bool1);

let str2 = String(bool1);
console.log(str2);
console.log(typeof str2);

// To Boolean
let value = 0;
console.log(typeof value);
console.log(Boolean(value));
console.log(typeof value);

let boolFromNum = Boolean(value);
console.log(boolFromNum);
console.log(typeof boolFromNum);

let Notnumber = Number("4d4878er");

console.log(typeof Notnumber); // Output : number because Number() function convert the string to number but it is not a valid number so it will be NaN.
console.log(Notnumber); // Output : NaN Because the string don't only number it also have character.

console.log(typeof NaN);

let Null = null;
console.log(typeof Null);

let NullToNumber = Number(Null);
console.log(NullToNumber);
console.log(typeof NullToNumber);