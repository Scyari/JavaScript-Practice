// var score = 102
let score = 102;
let name = "Arindam Saha"
let isloggedin = false

// objects 

let gendertype = ["Male", "female", "custom"]
let user = { firstname: "Arindam", lastname: "Saha" }

let getscore = score;

console.log(getscore)

// object 


let username = {
    firstname: "arindam",
    isloggedin: true,
};

username.firstname = "ari";       // fixed typo
username.lastname = "saha";

console.log(username.firstname);  // "ari"
console.log(typeof username.firstname); // "string"

if (typeof username.firstname === "string") {
    console.log("firstname is a string:", username.firstname);
}

console.log(username["firstname"]); // "ari" (fixed typo)