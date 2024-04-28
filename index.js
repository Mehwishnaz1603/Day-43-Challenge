// 🚀 Day 43 Challenge: Start Coding! 🚀 //
var _this = this;
//Question 127: Convert a traditional function expression to an arrow function.
var traditionalFunction = function (a, b) {
    return a + b;
};
// Converted into arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(4, 2));
console.log(arrowFunction(4, 2));
//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(3, 5, 9)); // Outputs: 24
//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var traditionalVsArrowFunction = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    }, // 'this' refers to traditionalVsArrow object
    arrowFunction: function () { console.log("Arrow function:", _this.value); },
};
traditionalVsArrowFunction.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrowFunction.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
