console.log(typeof "Hello");  // string
console.log(typeof 42);       // number
console.log(typeof 3.14);     // number
console.log(typeod true);     // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);     // object (this is a known quirk in JavaScript)
console.log(typeof []);     // object (arrays are considered objects in JavaScript)
conosle.log(typeof Nan);    // number (NaN stands for "Not-a-Number", but its type is still number)