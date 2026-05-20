// Difference between null vs undefined

// undefined - variable declared but not assigned a value
let a;
console.log(a);        // undefined
console.log(typeof a); // "undefined"

// null - intentionally assigned "nothing" value
let b = null;
console.log(b);        // null
console.log(typeof b); // "object" (this is a known JS bug/quirk)

// Key differences:
// 1. undefined is the default value, null is explicitly set
// 2. undefined means "not assigned", null means "empty/intentionally absent"

// Loose equality (==) considers them equal
console.log(null == undefined);  // true

// Strict equality (===) considers them different
console.log(null === undefined); // false
