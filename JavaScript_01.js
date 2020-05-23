/* Three Pillars of JS
 1. Types / Coercion
 2. Scope / Closures
 3. this / Prototypes
*/

/* Types / Coercion
   1. Primitive Types
   2. Converting Types
   3. Checking Equality
*/

// Primitive Types
// Note: In JavaScript, everything is not object.

/* Primitive Types: 
   - undefined
   - string
   - number
   - boolean
   - object
   - symbol
*/
var v;
typeof v;  //undefined
var v = "1";
typeof v;  // string
var v = 2;
typeof v; //number
var v = null;
typeof v;  //object
var v = [1,2,3];
typeof v;  //object
var v = function(){};
typeof v;  // function

// NaN ( not a number)
var greeting = "Hello, class!";

var something = greeting/2;

something // NaN

/* 
Use New : Object(), Array(), Function(), Date(), RegExp(), Error()
Don't Use New: String(), Number(), Boolean()
*/

date= new Date("24 March 2020");
marks= Number("23");
console.log(date,marks);   // Tue Mar 24 2020 00:00:00 GMT+0545 (Nepal Time) 23

// Converting Types
// The way to convert one type to another -- coercion
// --Coercion: String concatenation (number to string)
var msg1="There are ";
var numStudents= 16;
var msg2=" students.";
console.log(msg1 + numStudents +msg2 );  // There are 16 students
console.log(
    `There are ${numStudents+""} students`
);
//  Coercion: String To number
a= "5"
b= Number(a)
console.log(typeof(b));  // Number

// Boolean
// Falsy: 0, -0, nukk, NaN, false, undefined
// Truthy: "foo" , 23, [1:3], true , etc

c='1';
d= 1;
if (c ==d){
    console.log("True")  // Returns True
}
else {
    console.log("False")
}

// Checking Equality
// == allows coercion (types different)
// === disallows coercion (types same)
a = 1
b = 1
c = a==b   // True
d = a===b  // True

/* 2. Scopes and Closures
  - Nested Scope
  - Closure
*/

var x = 1;
function myfun(){
    x=2;
    y=3;
} 
myfun();
console.log(x,y);  // 2 3

// Function Expressions
// Anoynomous Function Expression
var clickhandler = function(){};
// Named Function Expression
var keyhandler = function keyhandler(){};
// Immediately Invoked Function Expression (IIFE)
var z = 1;
(
    function myfun1(){
        var z=2;
        console.log("Value of z is",z);  // 2
    }
)();  // if written z=2 in above line, it changes the value of z in global scope so belowe you will get 2 as output
console.log("Value of z is ",z) // 1

// Block Scoping
// It heps to tackle the accidental change in value of variable
var p = 1;
{
    let p = 2;
    console.log(p); // 2
}
console.log(p); // 1

function myfun2(){
    let temp=1;
    while (temp!=5){
        console.log(temp);
    }
}

/* this / Prototype
   -this
   -Prototypes
   -class{}
*/
var workshop={
    teacher: "kyle",
ask(question){
    console.log(this.teacher, question);
},
};

workshop.ask("What is implicit binding?");

function ask(question) {
    console.log(this.teacher, question);
}

function myfun4(){
    var info={
        teacher: "Suzy"
    };
    ask.call(info,"What is this");
}
myfun4();
{
    let info={
        teacher: "Lizeal"
    };
    ask.call(info,"How are you");
}

class Workshop {
    constructor(instructor){
        this.instructor=instructor;
    }
    ask(question) {
        console.log(this.instructor, question);
    }
}

var instructor1=new Workshop("Prabin");
var instructor2=new Workshop("Kumar");
instructor1.ask("What do you do?");
instructor2.ask("Whats your address?");