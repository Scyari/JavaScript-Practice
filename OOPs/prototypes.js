let computer = { cpu: 12 };
let samsung = {
    screen: "hd",
    __proto__: computer       // __(this called dunder)

};
let lg = {};

// console.log(`samsung`, samsung.__proto__); //Acces prototype of any particular object
//Output --> samsung { cpu: 12 }


let genericCar = { tyres: 4 }  //inheriting property 
let tesla = {
    driver: "Ai",
};
Object.setPrototypeOf(tesla, genericCar)  //using Object.setPrototypeOf method * mirror of dunder method

// console.log(`tesla`, tesla);   //Output --> tesla { driver: 'Ai' }

// console.log(`tesla`, tesla, Object.getPrototypeOf(tesla),);   //Output --> tesla { driver: 'Ai' } { tyres: 4 }