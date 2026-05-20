// == - loose Comparison
// === - strict Comparison

// number == string
console.log(3 == "3"); // true -> loose comparison

// number === string
console.log(3 === "3"); // false -> strict comparison [data type and converted value]

console.log(42 == "45"); // false

console.log(5 === 5); // true
console.log(5 === "5"); // false

console.log(5 == "5"); // true
console.log(5 == "5"); // true

console.log(0 == ""); // true  ->  "" converted to 0 
console.log(0 === ""); // false -> strict comparison

console.log(true == 1); // true -> true converted to 1
console.log(false == 0); // true -> false converted to 0
console.log(true == "1"); // true -> true converted to 1 
console.log(true == 2); // true

console.log(true == 42);

console.log(5 != "5"); // false -> loose comparison, 5 converted to "5"
console.log(5 !== "5"); // true -> strict comparison, different types
// console.log(5 !=== "5"); this doesn't exist

// === Strict check we will check for both the datatype and the value
// == Loose check we will check for the value only or data type

console.log(5 != "g"); // true -> 5 converted to "5", "5" != "g"



