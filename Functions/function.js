/* 
1. Write a function named "makeTea" that takes one parameter.
"typeOfTea", and returns a string like 
"making Lemon tea", when called with "Lemon tea".
store the result in a variable named "teaOrder".
*/

// function greet(name) {
//     console.log(`hello $ {name}`);
// }

function makeTea(typeOfTea) {        // (typeOfTea) --> parameter
    return `Making ${typeOfTea}`;
    console.log(test);  //unreachable code
}
let teaOrder = makeTea("Lemon Tea");      // argument
// console.log(teaOrder);                //output --> Making Lemon Tea

/* 
2. write a function named "ordertea" that takes one parameters "teaType". inside this function create another function named "confirmOrder" that return a message 
like "order confirmed for chai".
  call "confirmOrder" from within "orderTea" and return the result. 
*/
function orderTea(teaType) {
    function confirmOrder() {                  // function inside function
        return `order confirmed for chai`;     //return value
    }
    return confirmOrder()      // calling function inside function
}
let orderConfirmation = orderTea("Black Coffee");   // argument
// console.log(orderConfirmation);         //output-- > order confirmed for chai

/*
3. write an arrow function nameed "calculateTotal" that takes two parameters: "price" and "quantity". the function should return the total cost by multiplying the "price" and "quantity".
    store the result in a variable named "totalCost".
    
*/

// function greet () {}
// const greet = () => {}

const calculateTotal = (price, quantity) => {
    return price * quantity
}

let totalCost = calculateTotal(400 * 200)


/* 4. Write a function named "processTeaOrder" that takes another function, "make tea", as a parameter and calls it with argument "earl grey".
    return the result of calling "makeTea"
 */

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction) {
    return teaFunction("earl grey")
}

let order = processTeaOrder(makeTea)
// console.log(order);                  //output-- > maketea: earl grey


/*
5.