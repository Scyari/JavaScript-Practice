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