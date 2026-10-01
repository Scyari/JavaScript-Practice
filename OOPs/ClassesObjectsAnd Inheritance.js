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

