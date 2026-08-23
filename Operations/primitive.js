//number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);\\

//boolean
let isActive = true;
let isReallyActive = new Boolean(true) //not recommended

// null and undefined
let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastnamed);


let myString = "hello";
let username = "Ari";
let Message = (`hello ${username}`);
console.log(Message);


let sm1 = Symbol("Arindam");
let sm2 = Symbol("Arindam");

console.log(sm1 == sm2); //false