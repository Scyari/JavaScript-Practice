/*
1. Write a "for" loop that loops  through the array ["green tea, black tea", "oolong tea", "chai"] 
and stops the loop when it finds "chai".

store all the tea before "chai" in a new array named "selectedTeas".
*/

let tea = ["green tea, black tea", "oolong tea", "chai"];
let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
    if (tea[i] === "chai") {            //condition to find "chai"
        break;                          // break the loop
    }
    selectedTeas.push(tea[i]);          // pushing the loop
}
// console.log(selectedTeas);        //output --> [ 'green tea, black tea', 'oolong tea' ]

/*
2. Write a "for" loop that loops through the array ["london", "new york", "paris", "berlin"]
and skips "paris"
  store the other cities in a new array named "visitedCities".
*/

let place = ["london", "new york", "paris", "berlin"];
let visitedCities = [];

for (let i = 0; i < place.length; i++) {

    if (place[i] === "paris") {
        continue;                      // skips the element
    }
    visitedCities.push(place[i]);
}
// console.log(visitedCities);        //output --> [ 'london', 'new york', 'berlin' ]

/*

3. Write a "for" loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number "4" is found.

   store the numbers before "4" in a new array named "smallNumbers".
   */

let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === 4) {
        break;                    //stop the loop when      number 4 is found
    }
    smallNumber.push(numbers[i]);
}
// console.log(smallNumber);       //output --> [ 1, 2, 3 ]

/*

4. Use a "for -of" loop to iterate through the array ["apple", "banana", "cherry", "date"] and skip "cherry".

   store the other fruits in a new array named "preferredFruits".
*/

let fruits = ["apple", "banana", "cherry", "date"];
let preferredFruits = [];

for (const fruit of fruits) {            // carrying fruit as const of fruits
    if (fruit === "cherry") {           // calling const (fruit)
        continue;
    }
    preferredFruits.push(fruit);      // calling const fruit
}
// console.log(preferredFruits);    //output [ 'apple', 'banana', 'cherry', 'date' ]


