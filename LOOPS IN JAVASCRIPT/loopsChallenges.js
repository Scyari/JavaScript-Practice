
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
while (j > 0) {               //j greater than 0
    countdown.push(j);
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
    tea = prompt(`enter your fav tea(type "stop" to finish)`)  // keyword stop

    if (tea !== "stop") {
        teaCollection.push(tea)   // untill tea not equals to "stop" it keep pushing the loop
    }

} while (tea !== "stop");       // loop works untill user dont write "stop"
//google console 


