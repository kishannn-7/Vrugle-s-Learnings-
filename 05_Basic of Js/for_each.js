// ++++++++++++++++ for each Loop +++++++++++++

// forEach loop is used on arrays to iterate over each element in the array.
//  It takes a callback function as an argument and executes that function for each element in the array.

let arr = [1, 2, 3, 4, 5];

let newArr = arr.forEach((num) => {
    if (typeof num === "number"){
        num = (num * 2) + 1; // This converts the number all number to odd;
    }
})

//console.log(newArr); 

// The forEach don't return anything or change the original array.
// It's just iterate the array and perform the operation on each element.

function oddMaker(num){
    if (typeof num === "number"){
        num = (num * 2) - 1;
        arr2.push(num);
    }
}

let arr2 = [];

arr.forEach(oddMaker);

console.log(arr2);

// To solve the problem of forEach not returning anything, we can use the map() method.

