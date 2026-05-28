// Checking Array

// Check if something is an Array
let result = Array.isArray([1, 2, 3]);
console.log(result); // true

let result1 = Array.isArray("a");
console.log(result1);  // false

console.log("-----------------");

// very & some
let eve = [80, 90, 85].every(s => s >= 70); // true
console.log(eve);

let eve1 = [80, 60, 85].every(s => s >= 70);
console.log(eve1);  // false

// Playwright API
[200, 201, 203].every(statusCode => statusCode > 200);

console.log("-----------------");

// Some - at least one must pass
let some = [80, 60, 85].some(s => s < 70);
console.log(some);  // true

let some1 = [80, 90, 85].some(s => s < 70);
console.log(some1);  // false