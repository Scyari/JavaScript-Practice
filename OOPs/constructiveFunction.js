// function greet(name) {
//     console.log("hello", name);
// }

/*
"this" and "new" keywords working as a linker
*/


function Person(name, age) {
    this.name = name   // connect with the parameter
    this.age = age
}

function car(make, model) {
    this.make = make
    this.model = model
}

let mycar = new car("Totyota", "Audi");    //connect with the name
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
// console.log(lemontea.describe());         //  Output --> this is a cup of lemon Tea 



function animal(species) {
    this.species = species;
    this.describe = function () {
        return `the species of the animal ${this.species}`
    };
};
let AnimalSpecies = new animal("PeaCock");
// console.log(AnimalSpecies.describe());        //  Output --> the species of the animal PeaCock




function toy(variety) {
    this.variety = variety;
}

toy.prototype.sound = function () {
    return `the toy variety is ${this.variety}`
}
let beyblade = new toy("Pegasaus");
console.log(beyblade.sound());     //  Output --> the toy variety is Pegasaus

let Politican = new toy("Pappu");
console.log(Politican.sound());     //  Output --> the toy variety is Pappu
