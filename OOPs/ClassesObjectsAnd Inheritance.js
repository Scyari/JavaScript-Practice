let car = {
    make: "toyota",
    model: "camry",
    year: 2020,

    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start());     //  Output --> toyota car got started in 2020