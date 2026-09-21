let computer = { cpu: 12 };
let samsung = {
    screen: "hd",
    __proto__: computer       // __(this called dunder)

};
let lg = {};

// console.log(`samsung`, samsung.__proto__); //Acces prototype of any particular object



let genericCar = { tyres: 4 }
let tesla = {
    driver: "Ai",
};
Object.setPrototypeOf(tesla, genericCar)  //using Object.setPrototypeOf method * mirror of dunder method

console.log(`tesla`, tesla);