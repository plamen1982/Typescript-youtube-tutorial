function sumTwoNumbers(a, b) {
    return a + b;
}
console.log(sumTwoNumbers(1, 1)); // if we add more arguments we will have tsc error, and signature should be followed from this one in the declaration
function sumNumbers(a, b, c) {
    if (c === void 0) { c = 1; }
    // d?: number, - optional
    var allOtherNumbers = [];
    for (
    // d?: number, - optional
    var _i = 3; 
    // d?: number, - optional
    _i < arguments.length; 
    // d?: number, - optional
    _i++) {
        // d?: number, - optional
        allOtherNumbers[_i - 3] = arguments[_i];
    }
    // c is optional argument our function and should be at the end
    if (allOtherNumbers.length === 0) {
        return a + b + c;
    }
    return a + b + c + allOtherNumbers.reduce(function (acc, curr) { return acc + curr; });
}
// console.log(sumNumbers(1, 1)); // the result is 3
console.log(sumNumbers(1, 1, 2, 111, 111, 111, 111));
