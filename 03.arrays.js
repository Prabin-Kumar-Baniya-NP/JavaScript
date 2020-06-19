// Declaration and initialization of array using array literal
var arr1 = [0,1,2,3,4,5]  
var arr2 = [,,,,,,]
var arr3 = [,,,4,5,,,6,,]
console.log(arr1);  // (6) [0, 1, 2, 3, 4, 5]
console.log(arr2[0]); // undefined
console.log(arr3[3]); // 4

// Declaration and initialization of array using Array constructor
var arr4 = new Array();
var arr5 = new Array(5,6,7,8);
var arr6 = new Array(3)  // Here, 3 is size of array
arr4[0] = 0;
arr4[1] = 1;
arr4[2] = 2;
arr6[0] = 0;
arr6[1] = 1;
arr6[2] = 2;
console.log(arr4); // (3) [0, 1, 2]
console.log(arr5); // (4) [5, 6, 7, 8]
console.log(arr6); // (3) [0, 1, 2]

// Modifying the contents of array
arr6[0] = "Modifed"
console.log(arr6[0]);  // Modifies
// Deleting Array
delete arr6
// length of array
console.log(arr1.length); // 6

// forEach in array  -- Use when you want to run a function in each value of array
var arr7 = ["A","B","C"];
arr7.forEach(function(value,index){
    console.log(value + " is at index number " + index);
})
/* Output
A is at index number 0
B is at index number 1
C is at index number 2 */

// for of -- When we want to iterate over the elements of array
for (let value of arr7){
    console.log(value);  // A B C 
}

// Getting input from user and storing in array
var n = prompt("Enter the size of array");
var arr8 = [];
alert("Enter the values in array")
//Getting input from the user
for (let i=0; i<n; i++){
    arr8[i] = prompt("Enter the value at index number "+ i);
}
//Displaying data to the user
for (let i=0; i<n; i++){
    console.log(arr8[i]);
}

// Multi-dimensional array
var arr9 = [
    [1,2,3,4],
    [5,6,7,8]
]
console.log(arr9)
console.log(arr9[0])
console.log(arr9[0][1])

// Creating empty 2D array
var arr10 = new Array([],[])
var arr11 = [[],[]]

// Concatenation of array
console.log(arr1.concat(arr2));

// Join in array - Returns value as string
var arr12 = [1,2,3]
console.log(arr12.join(" ")); // 1 2 3
console.log(arr12.join("and")); // 1and2and3
 
// Reverse in array
console.log(arr12.reverse()); // [3, 2, 1]

// Slicing in array
console.log(arr1.slice(1,3)); // [1, 2]
console.log(arr1.slice(-3,-1)); // [3, 4]
console.log(arr1.slice(-3, )); // [3, 4, 5]