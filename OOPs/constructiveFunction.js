// function greet(name) {
//     console.log("hello", name);
// }

/*
"this" and "new" keywords working as a linker
*/


function Person(name, age) {
    this.name = name
    this.age = age
}

function car(make, model) {
    this.make = make
    this.model = model
}

let mycar = new car("Totyota", "Audi");
// console.log(mycar);       //  Output --> car { make: 'Totyota', model: 'Audi' }

let myNewCar = new car("Tata", "Mosquoto");
// console.log(myNewCar);       //  Output --> car { make: 'Tata', model: 'Mosquoto' }


function tea(type) {
    this.type = type;
    this.describe = function () {
        return `this is a cup of ${this.type}`  // connecting with (this.type)
    };
}

let lemontea = new tea("lemon Tea");
console.log(lemontea.describe());      //  Output --> this is a cup of lemon Tea 