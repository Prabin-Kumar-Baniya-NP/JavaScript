var Top = function(name){
    this.a = 10; 
    this.name = name;
}
Top.prototype.show_name = function(){
    return this.name;
}

var Middle = function(name){
    Top.call(this); // Instance Member Inheritance
    this.b = 20;
    this.name = name;
}

var Bottom = function(name){
    Middle.call(this);  // Instance Member Inheritance
    this.c = 30;
    this.name = name;
}

// Prototype Inheritance
Middle.prototype = Object.create(Top.prototype);
Middle.prototype.constructor = Middle;
Bottom.prototype = Object.create(Middle.prototype);
Bottom.prototype.constructor = Bottom;

// Creating Objects
var T = new Top("T");
var M = new Middle("M");
var B = new Bottom("B");

console.log(T.show_name());
console.log(M.show_name());
console.log(B.show_name());
console.log(M.a);
console.log(B.b);
console.log(B.a);

//--------------------------------------------------------------------------------------------------------------------------------------------

class Top_1 {
    constructor(name){
        this.x = 100;
        this.name = name;
    }
    show_my_name(){
        return this.name;
    }
}

class Middle_1 extends Top_1{
    constructor(name){
        super();
        this.y = 200;
        this.name = name;
    }    
}

class Bottom_1 extends Middle_1{
    constructor(name){
        super();
        this.z = 300;
        this.name = name;
    }
} 

var T_1 = new Top_1("T_1");
var M_1 = new Middle_1("M_1");
var B_1 = new Bottom_1("B_1");
console.log(T_1.show_my_name());
console.log(M_1.show_my_name());
console.log(B_1.show_my_name());
console.log(T_1.x);
console.log(M_1.y);
console.log(B_1.z);
console.log(M_1.x);
console.log(B_1.y);
console.log(B_1.x);

// -------------------------------------------------------------------------------------------------------------------------------------------
var obj_1 = new Object;
var obj_2 = new Object;


obj_1.p = 111;
obj_2.q = 222;

var obj_3 = Object.assign({}, obj_1, obj_2);
console.log(obj_3.p); // 111
console.log(obj_3.q); // 222
