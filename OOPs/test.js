/*Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.*/

// Parent constructor
function Animal() { }

Animal.prototype.speak = function () {
    return 'Animal speaking';
};

// Child constructor
function Dog() { }

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function () {
    return 'Woof!';
};

// Create a Dog instance
const dog = new Dog();

console.log(dog.speak()); // Animal speaking
console.log(dog.bark());  // Woof!

// Demonstrate the prototype chain
console.log(dog.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.getPrototypeOf(dog) === Dog.prototype); // true



/*Functional Constructor and Errors
Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

Task 2: Handle Errors
Modify the Person constructor to throw an error if the age is not a positive number.*/

function Person(name, age) {
    // Handle invalid age
    if (typeof age !== "number" || age <= 0) {
        throw new Error("Age must be a positive number");
    }

    this.name = name;
    this.age = age;

    this.greet = function () {
        return `Hello, my name is ${this.name}`;
    };
}

// Valid person
const person1 = new Person("Alice", 25);

console.log(person1.greet());
// Hello, my name is Alice

// Invalid person
try {
    const person2 = new Person("Bob", -5);
} catch (error) {
    console.log(error.message);
    // Age must be a positive number
}


//Classes, Objects, and Inheritance

/*Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".

Task 3: Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.*/

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Task 1
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }

    // Task 2
    move() {
        return "The vehicle is moving";
    }

    // Task 3
    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle {
    // Task 1
    startEngine() {
        return "Engine started";
    }

    // Task 2: Method overriding
    move() {
        return "The car is driving";
    }
}

// Create objects
const vehicle = new Vehicle("Toyota", "Corolla");
const car = new Car("Honda", "Civic");

// Task 1
console.log(car.getDetails());
// Make: Honda, Model: Civic

console.log(car.startEngine());
// Engine started

// Task 2
console.log(vehicle.move());
// The vehicle is moving

console.log(car.move());
// The car is driving

// Task 3
console.log(Vehicle.isVehicle(vehicle));
// true

console.log(Vehicle.isVehicle(car));
// true

console.log(Vehicle.isVehicle({ make: "Ford", model: "Mustang" }));
// false



/*Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.*/

// Task 1: Encapsulation
class BankAccount {
    #balance;

    constructor(balance = 0) {
        if (balance < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.#balance = amount;
    }

    deposit(amount) {
        this.balance = this.#balance + amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.balance = this.#balance - amount;
    }
}

const account = new BankAccount(100);

account.deposit(50);
console.log(account.balance); // 150

account.withdraw(30);
console.log(account.balance); // 120


// Task 2: Polymorphism
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 4);

console.log(circle.area()); // 78.53981633974483
console.log(rectangle.area()); // 40
