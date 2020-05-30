// OOPS: Encapsulation, Abstraction, Inheritance, Polymorphism
// Creating Object Using Object Literal -- Example 1
var computer = {};
// Creating Object Properties
computer["RAM"] = "4 GB";
computer["Processor"] = "i5 8th Generation";
computer.display = "Full HD"
computer.graphics = "Nvidia GEFORCE"
// Creating Methods
computer.operating_system = function () {
    return "Dual Boot Opearting System - Ubuntu and Windows 10";
}

console.log(computer.RAM);
console.log(computer.display);
console.log(computer.operating_system());

// Creating Object Using Object Literal -- Example 2
var car = {
    model: "Farrari",
    price: "Very Costly",
    popularity: "Popular",
    colour: function () {
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
computer1.operating_system = function () {
    return "Dual Boot Opearting System - Ubuntu and Windows 10";
}

console.log(computer1.RAM);
console.log(computer1.display);
console.log(computer1.operating_system());

// Deleting properties and methods
delete computer1.display
delete computer1.operating_system()

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/

// Factory Function -- When function returns an object
function specification() {
    return {
        ram: "4 gb",
        display: "Full hd plus",
        price: function () {
            return "Greater than 10000";
        }
    };
};

var realme = specification();
var samsung = specification();
console.log(realme.ram);
console.log(samsung.price());

function get_specifications(ram_size, cost) {
    return {
        ram: ram_size,
        price: function () {
            return cost;
        }
    };
};

var nokia_110 = get_specifications(4, 15000);
var nokia_120 = get_specifications(8, 20000);

console.log(nokia_110.ram);
console.log(nokia_120.price());

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/

// Constructor 
function General_specifications(model_no, ram, price) {
    this.model = model_no;
    this.ram = ram;
    this.price = price;
    this.msg = function () {
        if (this.price <= 10000) {
            return "Cheap Mobile"
        } else {
            return "Expensive Mobile"
        }
    }
}

var huawei = new General_specifications("MX1010", 4, 9000);
var lava = new General_specifications("LX210", 8, 12000)
console.log(huawei.model);
console.log(lava.msg());

// To check whether the Properties Exists or not -- Using typeof and in
// Using Typeof
if (typeof huawei.ram == "undefined") {
    console.log("Property doesnot exists");
} else {
    console.log("Property exists");
}
// Using in
if ("price" in lava) {
    console.log("Property Exists");
} else {
    console.log("Property does not exists");
}

// To check object properties
console.log(Object.keys(huawei));

// Iterating over the object properties using for loop
for (var specs in huawei) {
    if (typeof huawei[specs] != 'function') {
        console.log(huawei[specs]);
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/

// Constructor as a class
var Car = function (name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.check_price = function () {
        if (this.price >= 2000000) {
            return "Expensive Car";
        } else {
            return "Cheap Car";
        };
    };
};

var maruti = new Car("suzuki", "white", "1500000");
var ferrari = new Car("F120", "red", "9900000");
console.log(maruti.name);
console.log(ferrari.check_price());

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
// Making Properties Private and Accessing Private Properties from Outside

var Daily_requirements = function (food_name, min_money) {
    this.food_name = food_name;
    var min_money = min_money; // This propery is now private by using var (can also use let, const).
    this.check_requirement = function () {
        if (this.min_money > 10000) {
            return "Requirement is high because minimum money is " + min_money; // Accessing Private Properties by using the methods 
        } else {
            return "Requirement is low because minimum money is " + min_money; // Accessing Private Properties by using the methods 
        };
    };
};

var ram = new Daily_requirements("Rice and Roti", 11000);
console.log(ram.check_requirement()); //Requirement is low because minimum money is 11000 --> Successfully accessed private properties

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/

// Prototype in JavaScript 

var House = function (floor, room) {
    // Instance Member
    this.floor = floor;
    this.room = room;
    this.check_house = function () {
        if (this.floor >= 3) {
            return "House is Big";
        } else {
            return "House is Small";
        };
    };
};

var Ram_house = new House(2, 6);
var Shyam_house = new House(3, 10);

// Prototype Member
House.prototype.min_price = 1000000;

console.log(Ram_house);
console.log(Shyam_house.room);
console.log(Shyam_house.check_house());
console.log(Ram_house.min_price); // Accessing Prototype Member

// Iterating over Instance Members and Prototype Members

console.log(Object.keys(Ram_house)) // Returns only instance members

for (var keys in Ram_house) {
    console.log(keys); // Returns Instance and Prototype members
}
/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/

// Understanding Prototype Object

var obj = new Object();
/* In above statement, Object is Constructor.
 Object will inherit all the properties of Object.prototype and Object.protype is the prototype object of object obj.
 Whereas prototype object of Object.prototype is null.
 -------------------------------------obj => Object.Prototype => NULL---------------------------------------------------------------
 */
// Verifying the concept through code
console.log(Object.prototype); // Returns the properties and methods of Object.prototype.
console.log(Object.getPrototypeOf(obj)); // Returns the properties and methods of Object.prototype.
console.log(Object.getPrototypeOf(Object.prototype)); // Returns null

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
var arr = new Array();
/* In above statement, Array is constructor.
Array will inherit all the properties of Array.prototype So, Array.prototype is prototype object of object arr.
Array.prototype is also inheriting the properties of Object.prototype. So, Object.prototype is the prototype object of object Array.prototype.  
Whereas prototype object of Object.prototype is null.
-------------------------------------arr => Array.prototype => Object.Prototype => NULL----------------------------------------------
*/
// Verifying the concept through code
console.log(Array.prototype); // Returns the properties of Array.protoype
console.log(Object.getPrototypeOf(arr)); // Returns the properties of Array. Prototype
console.log(Object.getPrototypeOf(Array.prototype)); // Returns the properties of Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); // Returns null

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
var str = new String();
/*In above statement, String is constructor.
String will inherit all the properties of String.prototype So, String.prototype is prototype object of  object str.
Whereas Object,prototype is the prototype object of String.prototype and prototypr object of Object.protype is null.
-------------------------------------str => String.prototype => Object.Prototype => NULL----------------------------------------------
*/
// Verifying the concepts through code
console.log(String.prototype); // Returns the properties of String.protoype
console.log(Object.getPrototypeOf(str)); // Returns the properties of String. Prototype
console.log(Object.getPrototypeOf(String.prototype)); // Returns the properties of Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); // Returns null

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
// Use of __proto__
console.log(obj.__proto__ == Object.prototype); // Returns true
console.log(arr.__proto__ == Array.prototype); // Returns true
console.log(str.__proto__ == String.prototype); // Returns true

House.prototype.max_price = 10000000;
House.__proto__.avg_price = 5000000;

// Conclusion of __proto__ is when we create any object, __proto__ property is created which points to its Prototype Object.

/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
// Understanding How JavaScript Engine Searches for a variable
var Smartphone = function (ram, price) {
    this.ram = ram
    this.price = price
};
var Realme = new Smartphone(8, 12000);
Realme.__proto__.price = 24000;
console.log(Realme.price); // Returns 12000 (not 24000)  but if not found price in Realme object it will return 24000 
/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
// Constructor Inheritance and Prototype Inheritance

// Creating two Constructor
var First = function () {
    this.a = 10;
};

var Second = function () {
    First.call(this); // It will inherit all the instance properties of First class 
    this.b = 20;
};

// Adding a Prototype member in First Class
First.prototype.x = 111;

// Prototype Inheritance --nheriting Prorotype Object I
Second.prototype = Object.create(First.prototype);
Second.prototype.constructor = Second; // Reset the constructor

// Creating Two Objects
var obj1 = new First();
var obj2 = new Second();

// Accessing the instance members of each objects
console.log(obj1.a);
console.log(obj2.b);

// Accessing the inherited instance properties of First class to Second class
console.log(obj2.a); // Returns 10

// Accessing the inherited prototype member
console.log(obj2.x);
/* ------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------*/
// Understanding Prototype Inheritance by Example-1
// Creating one Super class and two sub classes

// Super class
var Father = function (name) {
    this.name = name;
};

Father.prototype.bank_balance = "10 Lakhs";
Father.prototype.get_bank_balance = function () {
    return this.bank_balance;
}

// Creating two sub classes
var Daughter = function (name) {
    this.name = name;
}

var Son = function (name) {
    this.name = name;
}
// Prototype Inheritance
Daughter.prototype = Object.create(Father.prototype);
Daughter.prototype.constructor = Daughter;

Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;

// Creating Objects
var Ram = new Father("Ram");
var Hari = new Son("Hari");
var Gita = new Daughter("Gita");

console.log(Ram.name);
console.log(Ram.get_bank_balance()); // 10 Lakhs
console.log(Hari.get_bank_balance()); // 10 Lakhs
console.log(Gita.get_bank_balance()); // 10 Lakhs

// Understanding Prototype Inheritance by Example-2
// Prototype Inheritance by using function to avoid repetative codes while inheriting super class to sub class
// Creating one Super class and two sub classes

var Grand_father = function (name_gf){
    this.name_gf= name_gf;
}

Grand_father.prototype.bank_balance = "20 Lakhs"
Grand_father.prototype.get_bank_balance = function (){
    return this.bank_balance;
}

var Grand_son = function (name){
    Grand_father.call(this);
    this.name = name;
}

var Grand_daughter = function (name){
    Grand_father.call(this);
    this.name = name;
}

// Creating a function to apply Prototype Inheritance
function Inheritance(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

// Using the above function to inherit the prototype object
Inheritance(Grand_son, Grand_father);
Inheritance(Grand_daughter, Grand_father);

// Creating Objects

var Champaklal = new Grand_father("Champaklal");
var Tapu = new Grand_son("Tapu");
var Sonu = new Grand_daughter("Sonu");

console.log(Tapu.get_bank_balance()); // 20 Lakhs
console.log(Sonu.get_bank_balance()); // 20 Lakhs
console.log(Tapu.name_gf);
