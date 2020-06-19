// Creating a function
function display_my_name(name){
    console.log("Your name is ", name);
};

display_my_name("Prabin");

// Rest Parameters
function rest_para(...parameters){
    console.log("Number of arguments given to the function =",arguments.length  );
    console.log("Arguments are ", parameters);
}

rest_para(1,2,3,4,5,6,7,8);

// Block Scope
a = 10 
{
    let a = 20;
    console.log("Value of a is ",a  )  // 20
}

console.log("Value of a is ",a); // 10

// Closure 
// Inner function can access outer function variable But outer function can't access inner function variables

function outer(){
    var x = 100;
    function inner(){
        var y = 200;
        console.log("Value of x is",x);  // Value of x is 100
    }
    inner();
   // console.log("Value of y is ",y);  Gives this error --> Uncaught ReferenceError: y is not defined
};

outer();

// Function Expression - When we create a function and assign it to a variable
var operation1= function calculate(a,b,c){
    return 2*a-3*b +4*c
}
console.log(operation1(5,2,1));

// Anonymous Function - Function without name
var operation2 = function(a,b,c){
    return a+b+c
}

console.log(operation2(1,2,3));

// Passing anonymous function as an argument

function disp(my_name){
    console.log(my_name());
}
disp(function(){
    return "Prabin";
})

// Arrow Function

var operation3 = () => {return "Hi, this is arrow function"};
console.log(operation3());

var operation4 = (a,b) => {return a+b}
console.log(operation4(4,5));

// Immediately Invoked Function Expression (IIFE)
(
 function (){
     console.log("Hello, This is IIFE");
 }
)();

(
    function (a,b,c){
        console.log(a+b+c);
    }
)(5,3,4);
