// Advance Questions ================================================================

// 1. Merge Two Arrays Without Using Built-in Functions.  ===========================================

function mergeArrays(...arr1) {
    let tempArr = [...arr1];
    let final=[];

    for(let i=0; i<tempArr.length;i++){
        final.push(...tempArr[i]);
    };

    return final;
};

// console.log(mergeArrays([1],[2,1,4,,8],[3,{},2],[4,'7eb9',3,3]));

// 2. Find the First Repeated Character in a String.====================================================

function firstRepeatedChar(str){
    let tempArr = [];
    for (let i = 0; i < str.length; i++) {
        if(tempArr.includes(str[i])) return `First Repeated char. : ${str[i]}`;    
        tempArr.push(str[i]);
    };
    return `No Repeated Char Found `    
};

// console.log(firstRepeatedChar("akbcdcefgahijkkklmnopqr"));

// 3. Count How Many Times Each Word Appears in a Sentence. ==========================================

function wordCounterObj(str){
    let sentanceArr = str.split(" ").filter((word) => word!== "");
    let countObj = {};
    for (let i = 0; i < sentanceArr.length; i++) {
        let word = sentanceArr[i]
        if (countObj.hasOwnProperty(word)) {
            countObj[word] += 1;
        } else {
            countObj[word] = 1;
        }  
    }
    return `Sentance : ${str} \nWord Counts : ${JSON.stringify(countObj,null,1)}`;
};

// console.log(wordCounterObj('the store is at near the circle which is located   at the center of the city'));


// 4. Find Common Elements Between Two Arrays. ===================================================================
// (Compare two arrays and find elements that appear in both, without using sets or built-in intersection methods.)

function findSameInArr(arr1,arr2) {
    
    let result = arr1.filter(val => {
        if(arr2.includes(val)){
            arr2.splice(arr2.indexOf(val), 1);
            return true;
        }
        return false;
    });
    return result;
};

// console.log(findSameInArr([1,2,3,4,7,7,5,6],[7,8,1,2,9]));

// 5. Move All Zeroes to End of an Array Without Sorting. ========================================================
// (Write a program to shift all zeroes to the end of an array while maintaining the order of non-zero elements).

function addZeroToEnd(arr) {
    let temp = [];
    let result = arr.filter((val) => {
        if(val === 0){
            temp.push(0);
            return false;
        }
        return true;
    });
    result = [...result,...temp]
    return result;
};

// console.log(addZeroToEnd([0,1,2,0,0,8,0,9,3,5,4,0]));


// 6. Count the Number of Words in a Sentence. ===================================================================
// ( Write logic to count how many words are in a sentence. Avoid using .split() if possible.)

function wordCounter (str) {
    let count = 0;
    // let tempStr = str;
    for (let  i = 0; i < str.length ; i++){
        if ( str.charAt(i) === ' '){
            if (str.charAt(i-1) !== ' '){
                count++;
            }
        } else if(i === str.length - 1){
            count++;
        }
    }
    return `There are ${count} words in this Sentance`;
}

// console.log(wordCounter("The  hitler is  a  Tanasah  hgg hjgjhg hbjhb jhbhjb kjhj jkhjkh kjhjk    hjkkkkkhkjh    45 "));

// ===========================================================================================================================

// 7. Implement a Basic Login System (Username & Password Validation).
//  Create a small program where a user enters username and password. If both match a pre-defined list, print "Login successful".
const userList = [];

function Login(userName, password) {
    userName = userName.toString().trim().toLowerCase();
    password = password.toString().trim().toLowerCase();

    let found = false;
    let key = false;
    userList.forEach( user => {
        if ( user.userName === userName){
            found = true;
            if ( user.password === password){
                key = true;
                return
            }
        }
    });
    if(found === true && key === true){
        return console.log(`Login SuccessFully`)
    }
    else if ( found === true && key === false){
        return console.log(`Password is incorrect, Enter valid password`); 
    } 
    return console.log(`User doesn't exist .`)
}

function Register(fullName,userName, password){
    fullName = fullName.toString().trim();
    userName = userName.toString().trim().toLowerCase();
    password = password.toString().trim().toLowerCase();
    // console.log(fullName,userName, typeof password);
    let userObj = {
        fullName : fullName,
        userName : userName,
        password : password
    }
    userList.push(userObj);
    return console.log(`${fullName} Registered Successfully.`)
}

// Register("kishan","user01",1244);
// Login("user",1243);

// console.log(userList);

// ===========================================================================================================================

// 8. Find the Longest Word in a String.
//  Scan a sentence and return the longest word without using .split() or .sort().

function longestWordFounder (str) {
    let tempStr = "";
    let strObj = {};
    let length = 0;

    for (let  i = 0; i < str.length ; i++){
        if ( str.charAt(i) === ' '){
            if (str.charAt(i-1) !== ' '){
                if(tempStr.length !== 0){
                    strObj[tempStr.length] = tempStr;
                    tempStr = "";
                }
            }
        } else if(i === str.length - 1){
            tempStr = tempStr + str.charAt(i);
            if(tempStr.length !== 0){
                strObj[tempStr.length] = tempStr;
               tempStr = "";
            }
        } else {
            tempStr = tempStr + str.charAt(i);
        };
    }
    let keysArr = Object.keys(strObj);
    keysArr.forEach(key => {
        if (Number(key) > length){
            length = Number (key);
        }
    })
    // console.log(strObj);
    
    return `The longest word is ${strObj[length]} with length ${length}`;
}

// console.log(longestWordFounder("The  hitler is  a  Tanasah  hgg hjgjhg hbjhb jhbhjb kjhj jkhjkh kjhjk  o kkkkkkkkkkkkkk hjkkkkkhkjh    45 "));

// =====================================================================================================================================

// 9 . Genrate Pattern : 
// ​*
// ​**
// ​***
// ​****

function pattern (num) {
    let str ="";

    for(let i = 1 ; i <= num; i++){
        for (let j = 1; j <= i;j++){
            str = str + '* '
        }
        str = str +'\n';
    }

    return str;
};

// console.log(pattern(5));

// 10. Check if an Array is Sorted or Not. ========================================================================================
// Determine whether a given array is sorted in ascending order, descending order, or unsorted.

function arraySortCheck (arr){
    let ascending = false;
    let descending = false;

    for (let i = 1; i < arr.length ; i++) {
        if (arr[i] > arr[i-1]) {
            ascending = true;
        } else if (arr[i] < arr[i-1]) {
            descending = true;
        }
    }

    if(!descending && ascending){
        return `Array is sorted in Ascending Order`
    }else if(!ascending && descending){
        return `Array is sorted in Descending Order`
    } else {
        return `Array is unsorted`;
    }
};

// console.log(arraySortCheck([1,2,5,5,6,7,8]));
