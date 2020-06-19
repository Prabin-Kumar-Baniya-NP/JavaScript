class Top {
    constructor() {
        this.a = 10;
    }
    show_value_a() {
        return this.a;
    }
}

class Middle extends Top {
    constructor() {
        super();
        this.b = 20;
    }
    show_value_b() {
        return this.b;
    }
};

class Bottom extends Middle {
    constructor(){
        super();
        this.c = 30;
    }
    show_value_c(){
        return this.c;
    }
}

var A = new Top;
var B = new Middle;
var C = new Bottom;
console.log(A.show_value_a());
console.log(B.show_value_b());
console.log(C.show_value_c());
console.log(C.show_value_a());
console.log(C.show_value_b());
//-------------------------------------------------------------------------------------------------------
class Top_1 {
    constructor(a) {
        this.a = a;
    }
    show_value_a() {
        return this.a;
    }
    static just_show(){
        return "Static Method"
    }
}

class Middle_1 extends Top_1 {
    constructor(b) {
        super(b);
        this.b = b;
    }
    show_value_b() {
        return this.b;
    }
};

class Bottom_1 extends Middle_1 {
    constructor(c){
        super(c);
        this.c = c;
    }
    show_value_c(){
        return this.c;
    }
}

var P = new Top_1(100);
var Q = new Middle_1(200); 
var R = new Bottom_1(300);

console.log(Top_1.just_show()); // Static Method
console.log(P.show_value_a()); // 100
console.log(Q.show_value_b()); // 200
console.log(R.show_value_c()); // 300
console.log(Q.show_value_a()); // 200
console.log(R.show_value_a()); // 300
console.log(R.show_value_b()); // 300


