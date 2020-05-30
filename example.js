/*
1. Function Expression
2. Anonymous Function
3. Arrow Function
4. IIFE
*/
// Function Expression
var sum = function calculate(a,b,c){
    return a+b+c;
}

// Anonymous Function
var sub = function (x,y,z){
    return x-y-z;
}

// Arrow Function
var multiply = (a,b,c) => {return a*b*c};

// Immediately Invoked Function Expression
(
   function (a,b){
       return a/b;
   }
)(4,2);

/*
 Two ways to create object-- Using Object literal and using Object Constructor
*/
var mobile = {};  // Using Object Literal
var car = new Object()  // Uisng Object Constructor
// Creating Object Properties
mobile["ram"] = '8gb';
car.color = "black";
// Accessing Object Properties
console.log(mobile.ram);
console.log(car.color);
// Deleting Object Properties
delete mobile.ram;
delete car.color;
// Creating Methods
mobile["msg"]= function(){
    console.log("I am a smartphone");
}
// Deleting Methods
delete mobile.msg;

// Factory Function -- When The function returns a object
function Get_Specification(){
    return {
        ram :"8 GB",
        display : "Full HD plus",
    }
}
general_spec=Get_Specification()
console.log(general_spec.ram);

// Creating a Constructor
function Daily_requirements(food_name, min_money){
    this.food_name = food_name;
    this.min_money = min_money;
    this.check_requirement = function (){
        if (this.min_money > 10000){
            return "Requirement is high";
        }
        else {
            return "Requirements is low";
        };
    };
};

var ram = new Daily_requirements("Rice" , 2000);
var shyam = new Daily_requirements("Roti", 5000);
var gita = new Daily_requirements("Rice and Roti", 11000);
console.log(ram.food_name);
console.log(shyam.min_money);
console.log(gita.check_requirement());

