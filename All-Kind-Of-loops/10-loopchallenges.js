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

/*
5. Use a "for in" loop to loop through an object containing city populaions.
    stop the loop when the population of "berlin" is found and store all the previous cities population in a new object named "cityPopulations".

    let cityPopulation = {
    "london": 9000000,
    "new york": 8000000,
    "paris": 2000000,
    "berlin": 3000000
    };
*/

let cityPopulation = {
    london: 9000000,
    new_york: 8000000,
    paris: 2000000,
    berlin: 3000000
};
let cityNewPopulations = {};
// console.log(object.keys(cityPopulation));    //output --> [ 'london', 'new york', 'paris', 'berlin' ]

for (const city in cityPopulation) {
    // key = value
    if (city === "berlin") {
        break;
    }
    cityNewPopulations[city] = cityPopulation[city];   //storing the key and value in new object
}
// console.log(cityNewPopulations);     //{ london: 9000000, 'new york': 8000000, paris: 2000000 }


/*
6. use a "for in" loop to loop through an object conataining city populations.
    skip the city with a population below 3 million and store the rest in a new object
    named "large cities",
    
let WorldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    };

*/

let WorldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000
};

let largeCities = {};

for (const city in WorldCities) {
    if (WorldCities[city] < 3000000) {      //WorldCities[city] (calling in array)
        continue;
    }
    largeCities[city] = WorldCities[city];   // copy in array format 
}
// console.log(largeCities);          //{ Sydney: 5000000, Tokyo: 9000000, Berlin: 3500000 }
``  `   ~`

/*
7. Write a "forEach" loop that iterates through the array ["earl gray", "green tea", "chai", "oolong tea"].
   stop the loop when "chai" is found, and store all previous tea types in an array named "availabeTeas".
*/
let Teas = ["earl gray", "green tea", "chai", "oolong tea"];
let availabeTeas = [];

// Array.forEach(element => {        // template fot "forEach" loop
// });

// Teas.forEach((tea) => {
//     console.log(tea);       //  output: earl gray green tea chai oolong tea
// });

Teas.forEach(function (tea) {
    if (tea === "chai") {
        return;
    }
    availabeTeas.push(tea);
});
// console.log(availabeTeas);      //  Output:  [ 'earl gray', 'green tea', 'oolong tea' ]


/*
8. Write a "forEach" loop that iterates through the array ["london", "new york", "paris", "berlin"].
  skip "paris" and store the other cities in a new array named "traveledCities".
  */

let cities = ["london", "new york", "paris", "berlin"];
let traveledCities = [];
cities.forEach(city => {
    if (city === "paris") {
        return;
    }
    traveledCities.push(city);
})
console.log(traveledCities);    //  Output: [ 'london', 'new york', 'berlin' ]