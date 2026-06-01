// Pure Functions: A pure function is a function that always produces the same output for the same input and has no side effects
// (does not modify any external state).
// Pure functions are easier to test and reason about because they do not depend on or modify any external state.

// Pure - no side effects, predictable output, same input gives same output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2) + "%";
}

console.log(calculatePassRate(100, 85)); // 85.00%
console.log(calculatePassRate(50, 45)); // 90.00%

console.log("---------------");

// Impure - depends on external state, modifies external state, unpredictable output
function isPassing(score) {
    return score >= threshold; // threshold is an external variable, making this function impure  
}

let threshold = 60;
console.log(isPassing(75)); // true
console.log(isPassing(55)); // false 
console.log(isPassing(threshold)); // true    

