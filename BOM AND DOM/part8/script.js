// example 1
// document.querySelectorA('button')

// let hold = document.getElementById('changeTextButton');
// console.log(hold);

document
    .getElementById("changeTextButton")
    .addEventListener("click", () => {
        let paragraph = document.getElementById("myParagraph");
        // console.log(paragraph);
        // console.log(paragraph.textContent);
        paragraph.textContent = "Text has been changed!";
    });


// example 2
// Traverse the List (calling the first name or child from the list)

document.getElementById("highlightFirstCity")
    .addEventListener("click", function () {
        let citiesList = document.getElementById("citiesList");
        // console.log(citiesList.firstElementChild); Traverse the List (calling the first name or child from the list)

        // console.log(citiesList.firstElementChild.classList);  --> DOMTokenList ['chai', value: 'chai']0: "chai"length: 1value: "chai"[[Prototype]]: DOMTokenList

        citiesList.firstElementChild.classList.add("highlight");  //highlist the first element 
    })


// example 3

document.getElementById("changeOrder")
    .addEventListener("click", function () {
        let coffeeType = document.getElementById("coffeeType");
        coffeeType.textContent = "Espresso";          //changing Text Content 1 to another
        coffeeType.style.backgroundColor = "brown"   // Turning into CSS
        coffeeType.style.padding = "5px";            // Turning into CSS
    });

// example 4
//Creating and Inserting Elements 

document.getElementById("addNewItem")
    .addEventListener("click", function () {
        let newItem = document.createElement("li");  //creating new item
        newItem.textContent = "Eggs";  // Adding this item
        document.getElementById("shoppingList").appendChild(newItem); // Adding new item (appendchild)
    })