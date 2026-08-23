//check if a number is greater than another number:

let num1 = 5;
let num2 = 8;
console.log("i am regular upper code");


if (num1 > num2) {
    console.log("num1 is greater than num2");
}
else {
    console.log("nope, num1 is not greater");
}

console.log("i am regular bottom code");



//checking if a string is equal to another string: // != --> not equals

let username = "arindam";
let anotherUsername = "arindam";
if (username != anotherUsername) {
    console.log("pick another username");
}
else {
    console.log("you can pick this username")
}

//checkin if a variable is a number or not:

let score = 44;

if (typeof score === "number") {
    console.log("yep it is a number");
}
else {
    cosole.log("no this is not a number");
}


// checking if a boolean value is true or false:

let isTeaReady = true;
if (isTeaReady) {
    console.log("tea is ready");
}
else {
    console.log("tea is not ready");
}

// check if an array is empty or not:

let item = [];
console.log(item.lenght);

if (item.lenght === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array is not empty");
}