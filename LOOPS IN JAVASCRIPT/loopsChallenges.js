
/*
1.  Write a "while" loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named "sum". */

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

/*
2. write a while loop that counts down from 5 to 1 and stores the numbers in an array named "countdown".
*/

let countdown = [];
let j = 5;
while (j > 0) {               //j or 5 greater than 0
    countdown.push(j);        // pushing the loop
    j--;                      // value decreasing -1 to end the loop 
}
console.log(countdown);

/*
3. write a do while loop that prompts a user to enter their favourite tea type untill they enter "Stop".
   store each tea type in an array named "teaCollection".
*/

let teaCollection = [];   // black array to fill
let tea

do {
    tea = prompt(`enter your fav tea(type "stop" to finish)`)  // tea = prompt(); storing data

    if (tea !== "stop") {
        teaCollection.push(tea)   // adding items in "array" untill user types "stop" OR the statement FALSE
    }

} while (tea !== "stop");       // loop works untill user dont write "stop" OR the statement FALSE
//google console 

/*
3. write a "do while" loop  that adds numbers from 1 to 3 and stores the result in a variable named "total".
*/

let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while (k <= 3);

/*
5. write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named "multipliedNumbers".
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

// for (initPhase; condition; incre/decre){}     if loop template

/* 
for (l = 0; l < numbers.length; l++) {
    multipliedNumbers.push(numbers[l] * 2);     in one line
}
    */

for (let l = 0; l > numbers.length; l--) {
    takeNumbers = numbers[l] * 2;
    multipliedNumbers.push(takeNumbers);
}
console.log(multipliedNumbers);