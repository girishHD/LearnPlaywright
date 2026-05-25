// Creating Arrays

// Using Array Literals (preferred)
let browser = ["Chrome", "Firefox", "Safari"];

// Array Constructor
let scores = new Array(3);  // 3 is length here
let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);

scores[0] = 1;
scores[1] = 4;
scores[2] = 9;
console.log(scores);

// Array.of
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from
let chars = Array.from("hello");  // only character takes
// [ 'h', 'e', 'l', 'l', 'o' ]
console.log(chars);

let number = Array.from("123456789"); // not used for numbers
console.log(number);

