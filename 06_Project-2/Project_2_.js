// ********************* Basic Questions **********************

// Check if a Number is Even or Odd ---------------------------------------------------------------------------------

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

// console.log(isEvenOrOdd(1521));

// Find the Largest of Three Numbers ----------------------------------------------------------------------------------

// Approach 1 - Basic Approach

let maxOfThree = (val1, val2, val3) => {
  if (val1 > val2) {
    if (val1 > val3) {
      return val1;
    } else {
      return val3;
    }
  } else if (val2 > val3) {
    return val2;
  } else {
    if ((val1 == val2) == val3) {
      return `All three are same : ${val1}`;
    } else {
      return val3;
    }
  }
};

// console.log(maxOfThree(3,2,3));

// Approach 2 - Any amount of Number
let maxNumber = function (...val1) {
  let maxNum = 0;

  val1.forEach((element) => {
    if (element > maxNum) {
      maxNum = element;
    }
  });

  return maxNum;
};

// console.log(maxNumber(5,2,8,80,10,0,45,23));

// Revese a Number --------------------------------------------------------------------------------------------------------------

//Approach - 1 : mathamatical Approach

let reverseNumber = (num) => {
  let reversed = 0;
  if (typeof num === "number" && Math.floor(num) == num) {
    (function reverseBuilder() {
      if (num === 0) {
        return;
      }
      let rem = num % 10;
      num = Math.floor(num / 10);
      reversed = reversed * 10 + rem;
      reverseBuilder();
    })();
    return reversed;
  } else {
    return `Give a valid Number Input : ${num}`;
  }
};
// console.log(reverseNumber(123456789));

// Approach - 2 : Converting to string and than reverse

let reverseNumber2 = (num) => {
  if (typeof num === "number" && Math.round(num) == num) {
    let str = String(num);
    let ans = str.split("").reverse().join("");
    ans = Number(ans);
    return ans;
  } else {
    return `Give valid Number input`;
  }
};

// console.log(reverseNumber2(1234567890));

// Check if a Number and string is a Palindrome -------------------------------------------------------------------------------

// Approach 1 : whithout Built in method usage

let isPalindrome = (val) => {
  if (typeof val === "string") {
    return inner();
  } else if (typeof val === "number") {
    val = val.toString();
    return inner();
  } else {
    return "Give valid Input";
  }
  function inner() {
    let reversed = "";
    for (let i = val.length - 1; i >= 0; i--) {
      reversed = reversed + val[i];
    }
    if (reversed == val) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log("isPalindroame ? = ",isPalindrome("kishan"));

// Approach 2 - With built in method usage

let isPalindrome_1 = (val) => {
  if (typeof val === "string") {
    return inner(val);
  } else if (typeof val === "number") {
    return inner(val);
  } else {
    return "Give valid Input";
  }
  function inner(value) {
    let temp = value.toString().split("").reverse().join("");
    if (temp == value) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log("is this Palindrome? :",isPalindrome_1("karkrak"));

// Check if is Prime Number ---------------------------------------------------------------------------------------------------

function isPrime(num) {
  if (typeof num === "number" && Math.round(num) === num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (n % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  } else {
    return `Give valid Number input`;
  }
}

console.log(isPrime(9));

// Find Factorial of a Number  -------------------------------------------------------------------------------------------------

function factorial(num) {
  if (typeof num === "number" && Math.round(num) === num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  } else {
    return `Give Input of valid integer`;
  }
}

// console.log( factorial(10));

// Generate Fibonnaci Series up to n ----------------------------------------------------------------------------------

// Approach : whithout using built in method

function getFibonnaci(num) {
  if (Number.isInteger(num)) {
    i = 0;
    j = 1;
    let arr = [i];
    // let str = "0 ";
    while (j <= num) {
      arr.push(j);
      // str = str + `,${j} `;
      let fib = i + j;
      i = j;
      j = fib;
    }
    // return str;
    return arr;
  } else {
    return `Give Valid Integer Input`;
  }
}

// console.log(getFibonnaci(10));

// Sum of Digits of a Number ----------------------------------------------------------------------------------------

// Approach 1 : using string and built in method
function sumOfDigit(num) {
  if (Number.isInteger(num)) {
    return num
      .toString()
      .split("")
      .reduce((acc, cur) => {
        cur = Number.parseInt(cur);
        return acc + cur;
      }, 0);
  }
}

// console.log(sumOfDigit(123456));

// Approach 2 : using mathamatical approach just like reverse (not using it)

// ***********************  InterMediate Questions ************************

// Reverse a String Without Using Built in Functions ----------------------------------------------------------------------------------------------

function reverseString(str) {
  if (typeof str === "string") {
    let temp = "";
    for (let i = str.length - 1; i >= 0; i--) {
      temp = temp + str[i];
    }
    return temp;
  } else {
    return `Give valid String Input`;
  }
}

// console.log(reverseString("kishan"));

// Count the Number of vowels and Consonants in a string

// Approach -1

function countVowelsConsonants(str) {
  if (typeof str === "string") {
    let countV = 0;
    let countC = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        continue;
      }
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        countV++;
      } else {
        countC++;
      }
    }
    return `Vowels are '${countV}' & Consonants are '${countC}'`;
  } else {
    return `Give valid String Input`;
  }
}

// console.log(countVowelsConsonants("AAoMIR"));

// Approach 2

function countVowelsConsonants1(str) {
  let v = 0;
  let c = 0;
  let tester = "aeiouAeiou";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    for (let j = 0; j < tester.length; j++) {
      if (str[i] === tester[j]) {
        v++;
        break;
      } else if (j === tester.length - 1) {
        c++;
      }
    }
  }
  return `Number of Vowels = ${v} and Number of Consonants = ${c}`;
}

// console.log(countVowelsConsonants1("Aamir Khan"));

// Approach - 3

function countVowelsConsonants2(str) {
  let v = 0;
  let c = 0;
  let tester = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      if (tester.includes(str[i])) {
        v++;
      } else {
        c++;
      }
    }
  }
  return `Number of Vowels = ${v} and Number of Consonants = ${c}`;
}

// console.log(countVowelsConsonants2("I am a Student Of B.Tech Computer Engineering"));

// Sort and Array Without Using Built in Sort Functions ----------------------------------------------------------------------------

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let temp = 0;
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return `This is the sorted Array : ${array}`;
}

// console.log(sortArray([5,3,1,6,2,8,4]));

function checkArmstrongNum(num) {
  if (num > 0) {
    function seprateDigits(number) {
      let arr = [];
      let i = 0;
      while (number > 0) {
        let rem = number % 10;
        arr.push(rem);
        number = Math.floor(number / 10);
      }
      return arr;
    }
    let digits = seprateDigits(num);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum = sum + digits[i] ** digits.length;
    }
    if (sum === num) {
      return `The Number is Armstrong Number`;
    }
    return `This isn't Armstrong.Try Again...`;
  }
  return `Give Valid Input,It shouldn't be zero or negative number`;
}

// console.log(checkArmstrongNum(370));

// Extra work -- Armstrong generator according to n (give input of the user)
// This
function getArmstrong(n) {
  function check(num) {
    if (num > 0) {
      let digits = String(num);
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        sum = sum + Number(digits[i]) ** digits.length;
      }
      if (sum === num) {
        return true;
      }
      return false;
    }
    return `Error`;
  }

  let armstrongNums = [];
  for (let i = 1; i <= n; i++) {
    let result = check(i);
    if (result) {
      armstrongNums.push(i);
    }
  }
  return `Armstrong Number 0 to ${n} is : ${armstrongNums}`;
}

// console.time("armstrong");
// console.log(getArmstrong(100000000));
// console.timeEnd("armstrong");

// Find the GCD (Greatest Common Divisor) of Two Numbers ----------------------------------------------------------------------------
function Factors(n) {
  let factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

function GCD(num1, num2) {
  let factorsNum1 = Factors(num1);
  let factorsNum2 = Factors(num2);

  
  let commonFactors = factorsNum1.filter((factor) => {
    if (factorsNum2.includes(factor)) {
      factorsNum2.splice(factorsNum2.indexOf(factor), 1);
      return true;
    }
    return false;
  });

  let gcd = 1;
  commonFactors.forEach((factor) => {
    gcd *= factor;
  });
  return gcd;
}

// console.log(GCD(12, 18));

//Find the LCM (Least Common Multiple) of Two Numbers -------------------------------------

function LCM(num1,num2) {
  let factorsNum1 = Factors(num1);
  let factorsNum2 = Factors(num2);

  let commonFactors = factorsNum1.filter((factor) => {
    if(factorsNum2.includes(factor)){
      factorsNum2.splice(factorsNum2.indexOf(factor), 1);
      return true;
    }
    return false;
  });
  commonFactors.forEach((factor) => {
    if(factorsNum1.includes(factor)){
      factorsNum1.splice(factorsNum1.indexOf(factor),1);
    }
  });
  commonFactors = [...commonFactors,...factorsNum1,...factorsNum2];

  let lcm = 1;
  commonFactors.forEach((factor)=>{
    lcm *= factor;
  });
  return lcm; 
}

// console.log(LCM(12,4));

// Approach- 2 for LCM -------------------------------------------------------

// It's using the GCM function according to a formula

function Lcm2(num1,num2){
  let gcd = GCD(num1,num2);

  let lcm = (num1 * num2) / gcd;

  return lcm;
}

console.log(Lcm2(12,18));



