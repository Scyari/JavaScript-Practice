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
console.log(mycar);

let myNewCar = new car("Tata", "Mosquoto");
console.log(myNewCar);

