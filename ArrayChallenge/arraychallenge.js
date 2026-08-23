1. /*  declare an array named 'tea flavours' that contains the string "green tea", 'black tea', and 'oolong tea'.
    access the first element of the array and store it in a vairable named 'first tea'.*/

let teaFlavours = ["green tea", "black tea", "oolongh tea"]
const firstea = teaFlavours[0]

2. /*declare an array named 'cities' containing "lodon", "tokyo", "paris" and "newyork".
access the third element in the array and store it in a variable named 'favoritecity'.*/

let Cities = ["london", "tokyo", "paris", "newwork"]
const favouriteCity = Cities[2]

3. /*you have an array named "teatypes" containing "herba tea", "white tea", and "masala chai",
change the second element of the array to "jasmine tea"....*/

let teatypes = ["herbal tea", "white tea", "masala chai"]
teatypes[1] = "jasmine tea"
console.log(teatypes)

4. /*declare an array named "cities visited" comtaining "mumbai" and "sydney"
add 'Berlin' using the 'push' method ....*/

let citiesvisited = ["mumbai", "sydney"]
citiesvisited.push("berlin")
console.log(citiesvisited)

5. /*you have an array named "teaorders", with "chai", "iced tea", "matcha" and "earl grey",
remove the last element of the array using "pop" method and store it in a variable named "lastorder"....*/

let teaorders = ["cha", "iced tea", "matcha", "earl grey"]
// teaorders.pop();
// // console.log(teaorders)
const lastorder = teaorders.pop();
console.log(teaorders);
console.log(lastorder);

6. /* you have an array named "popularteas" containing "green tea", "   olong tea" and "chai", 
   create a soft copy of this array named "softcopyTeas". */

let popularteas = ["green tea", "oolong tea", "chai"];
let softcopyTeas = popularteas;
console.log(softcopyTeas);

7. /*you have an array named "topcities" containing "berlin", "singapore" and "new york"
    create a hardcopy of this array named "hardcopycities".*/

let topcities = ["singapore", "berlin", "new york"];
let hardcopycities = [...topcities];
console.log(hardcopycities);

8. /* you have two array: "european cities" containing "paris" and "rome", and "asian cities" containing "tokyo" and "bangkok".
 merge these two arrays into a new array named "worldCities".*/

let europeancities = ["paris", "rome"];
let asiancities = ["tokyo", "bangkok"];
// let worldcities = [europeancities, asiancities]  ... 2d Array
let worldcities = europeancities.concat(asiancities); //....concatation
console.log(worldcities);

9. /* you have an array named "teamanu" containing "masalachai", "oolong tea", "green tea" and        "earl grey".
   find the length of the array and store it in a variable named "menulength". */

let teamenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menulegnth = teamenu.length;
console.log(menulegnth);

10. /* you have an array named "citybucketlist", containing "kyoto", "london", "capetown" and "vancouver".
    check if "london", is in the array and store the result in a variable named "isLondonInList". */

let cityBuckelist = ["kyoto", "london", "capetown", "vancouver"];

let isLondonInList = cityBuckelist.includes("london");
console.log(isLondonInList);