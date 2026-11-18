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