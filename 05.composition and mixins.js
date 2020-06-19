// Composition or Mixin
function mixin(target,...sources){
    Object.assign(target,...sources);
}
var eating = {
    eat: function() {
        return "I can eat";
    }
};

var walking = {
    walk: function () {
        return "I can walk";
    }
};

var talking = {
    talk: function (){
        return "I can talk";
    }
}
var Human = function (){};
var Robort = function (){};
var Animal = function (){};


// First way - Compositioning objects to another objects
Object.assign(Human.prototype, eating,walking,talking);
Object.assign(Robort.prototype,walking,talking);
var Ram = Object.assign({},eating, walking, talking);
var Robort_1 = Object.assign({},walking, talking);
console.log(Ram.eat(), Ram.walk(), Ram.talk());
console.log(Robort_1.walk(), Robort_1.talk());

// Second way - Compositioning objects to class
var Hari = new Human;
var Robort_2 = new Robort;
console.log(Hari.eat(),Hari.walk(),Hari.talk());
console.log(Robort_2.walk(),Robort_2.talk());

// Third way - Compositioning objects to class using function
mixin(Animal.prototype,eating,walking);
var Cow = new Animal;
console.log(Cow.eat(),Cow.walk());

