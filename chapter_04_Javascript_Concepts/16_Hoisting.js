// JS Engine
// Line by Lone, JIT Compilation

console.log(greeting); // undefined
var greeting = "Hello";
console.log(greeting);

// Behind the scenes, JS engine does this (optimized the code)
// var greeting;            <-- hoisted with undefined
// console.log(greeting);   <--undefined
// greeting = "Hello";      <-- assignment stays in place
// console.log(greeting);   <-- "Hello!";
