let car = {
    make: "toyota",
    model: "camry",
    year: 2020,

    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start());     //  Output --> toyota car got started in 2020


function Person(name, age) {
    this.name = name
    this.age = age
}

let John = new Person("John,20");
// console.log(John.name);       //  Output --> John,20


//Prototypal Change

function animal(type) {
    this.type = type
};
animal.prototype.speak = function () {
    return `${this.type} make a sound`
};
Array.prototype.ari = function () {
    return `the array is ${this}`   // {this} is refference point 
};

let myArray = [1, 2, 3];
console.log(myArray.ari());         //  Output --> the array is 1,2,3

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.ari());    //  Output --> the array is 1,2,3,4,5,6


class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make}: This is an inheritance example `;
    }
}

let myCar = new Car("Toyota", "Tata");
// console.log(myCar.start());      //Tata is a car from Toyota
// console.log(myCar.drive());     //Toyota: This is an inheritance example 

// let vehOne = new Vehicle("Toyota", "Camella");
// console.log(vehOne.make)


// Encapsulation (Restricting direct access to data)

class bankAccount {
    #balance = 0;      // `# ` use for encapsulation

    deopsit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new bankAccount()
// console.log(account.#balance);  //undefined
console.log(account.getBalance());   //$ 0 