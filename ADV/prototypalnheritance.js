function Person(name) {
    this.name = name
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

let Arindam = new Person("Arindam")
Arindam.greet();

[[prototype]]