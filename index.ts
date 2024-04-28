             // 🚀 Day 43 Challenge: Start Coding! 🚀 //
//Question 127: Convert a traditional function expression to an arrow function.
let traditionalFunction = function (a , b) {
    return a + b };
let arrowFunction = (a, b) => a + b;     // Converted into arrow function
console.log(traditionalFunction(4, 2)); 
console.log(arrowFunction(4, 2)); 
  
//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
 
const multiplyParameters = (...numbers: number[]) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(3, 5, 9)); 
  
//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
let traditionalVsArrowFunction = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value)},    // 'this' refers to traditionalVsArrow object
arrowFunction: () => {console.log("Arrow function:", this.value) }, };
  traditionalVsArrowFunction.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrowFunction.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
  