let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

// filter - keeps element that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce - accumulate to a single value
let total = scores.reduce((sum, s) => sum + s, 0);
// let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// falt - faltness nested array
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());