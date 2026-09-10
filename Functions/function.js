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
    return confirmOrder()      // calling function within function
}
let orderConfirmation = orderTea("Black Coffee");   // argument
console.log(orderConfirmation);         //output-- > order confirmed for chai

