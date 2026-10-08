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



//