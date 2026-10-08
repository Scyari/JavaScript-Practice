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


//
