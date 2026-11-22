const person = {
    name: "Arindam",

    greet() {
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet();  //Hi, I am Arindam

const greetFunction = person.greet;
greetFunction();   //Hi, I am undefine

const boundGreet = person.greet.bind({ name: "Scyther" });
boundGreet(); //Hi, I am Scyther

//bind, call and apply
