// OOPS: Encapsulation, Abstraction, Inheritance, Polymorphism
// Creating Object Using Object Literal -- Example 1
var computer={};
// Creating Object Properties
computer["RAM"] = "4 GB";
computer["Processor"] = "i5 8th Generation";
computer.display = "Full HD"
computer.graphics = "Nvidia GEFORCE"
// Creating Methods
computer.operating_system = function() {
    return "Dual Boot Opearting System - Ubuntu and Windows 10";
}

console.log(computer.RAM);
console.log(computer.display);
console.log(computer.operating_system()); 

// Creating Object Using Object Literal -- Example 2
var car={
    model : "Farrari",
    price : "Very Costly",
    popularity : "Popular",
    colour: function(){
        return "Black";
    } 
};

console.log(car.colour());
console.log(car.model);

// Creating Object Using Object Constructor
var computer1 = new Object();
// Creating Object Properties
computer1["RAM"] = "4 GB";
computer1["Processor"] = "i5 8th Generation";
computer1.display = "Full HD"
computer1.graphics = "Nvidia GEFORCE"
// Creating Methods
computer1.operating_system = function() {
    return "Dual Boot Opearting System - Ubuntu and Windows 10";
}

console.log(computer1.RAM);
console.log(computer1.display);
console.log(computer1.operating_system()); 

// Deleting properties and methods
delete computer1.display
delete computer1.operating_system()

// Factory Function -- When function returns an object
function specification(){
    return {
        ram : "4 gb",
        display : "Full hd plus",
        price : function(){
            return "Greater than 10000";
        }
    };
};

var realme = specification();
var samsung = specification();
console.log(realme.ram);
console.log(samsung.price());

function get_specifications(ram_size,cost){
    return {
        ram : ram_size,
        price : function(){
            return cost;
        }
    };
};

var nokia_110 = get_specifications(4,15000);
var nokia_120 = get_specifications(8,20000);

console.log(nokia_110.ram);
console.log(nokia_120.price());

// Constructor 
function General_specifications(model_no, ram, price){
    this.model= model_no;
    this.ram = ram;
    this.price = price;
    this.msg= function(){
        if (this.price <= 10000){
            return "Cheap Mobile"
        }
        else {
            return "Expensive Mobile"
        }
    }
}

var huawei = new General_specifications("MX1010",4, 9000);
var lava = new General_specifications("LX210", 8, 12000)
console.log(huawei.model);
console.log(lava.msg());
