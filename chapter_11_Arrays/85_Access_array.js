// Accessing & Modifying
let status = ["Pass", "Fail", "Skip"];
console.log(status[0]);  // Pass
console.log(status[2]);  // Skip

console.log("---------");

console.log(status.at(-1)); // Skip (-3, -2, -1)
console.log(status.at(-2)); // Fail
console.log(status.at(-3)); // Pass
console.log(status.at(-4)); // Undefined

console.log("---------");

// Modify
status[1] = "blocked";
console.log(status);
