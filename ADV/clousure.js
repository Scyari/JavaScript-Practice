function outer() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());  //1
console.log(increment());  //2
console.log(increment());  //3
console.log(increment());  //4
console.log(increment());  //5
console.log(increment());  //6
