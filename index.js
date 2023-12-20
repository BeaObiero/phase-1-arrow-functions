// 1)create function expression called divide
const divide = function (a, b) {
    return a/b;


};
console.log(divide(2000,100));

// 2)create an arrow function called 'square'

const square = (number) => {
    return number * number;

}
const squareResult = square(2);
console.log(squareResult);

// 3)create an arrow function 'add'

const add = (a, b) => {
    return a + b;
}
const addResult = add (3, 4);
console.log(addResult);
