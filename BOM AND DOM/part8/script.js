// example
// document.querySelectorA('button')

// let hold = document.getElementById('changeTextButton');
// console.log(hold);

document
    .getElementById("changeTextButton")
    .addEventListener("click", () => {
        let paragraph = document.getElementById("myParagraph");
        console.log(paragraph);
    });
