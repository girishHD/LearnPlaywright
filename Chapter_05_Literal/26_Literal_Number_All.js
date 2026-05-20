// JavaScript Number Types (all numbers are 64-bit floating point IEEE 754)

// 1. Integer
let int = 42;
console.log("Integer:", int);

// 2. Floating-point / Decimal
let float = 3.14;
console.log("Float:", float);

// 3. Scientific / Exponential notation
let sci = 5e3;      // 5 * 10^3 = 5000
let sciSmall = 1e-3; // 0.001
console.log("Scientific:", sci, sciSmall);

// 4. Binary (0b prefix)
let bin = 0b1010;   // 10 in decimal
console.log("Binary:", bin);

// 5. Octal (0o prefix - ES6)
let oct = 0o77;     // 63 in decimal
console.log("Octal:", oct);

// 6. Hexadecimal (0x prefix)
let hex = 0xFF;     // 255 in decimal
console.log("Hex:", hex);

// 7. BigInt (Big integers - ES2020)
let big = 123456789012345678901234567890n;
console.log("BigInt:", big);

// 8. Special numeric values
let inf = Infinity;
let negInf = -Infinity;
let nan = NaN;
console.log("Infinity:", inf);
console.log("-Infinity:", negInf);
console.log("NaN:", nan);

// 9. Number.MAX_SAFE_INTEGER / MIN_SAFE_INTEGER
console.log("Max safe integer:", Number.MAX_SAFE_INTEGER);
console.log("Min safe integer:", Number.MIN_SAFE_INTEGER);

// 10. Number.MAX_VALUE / MIN_VALUE
console.log("Max value:", Number.MAX_VALUE);
console.log("Min value:", Number.MIN_VALUE);

// 11. Number.EPSILON (smallest difference between two representable numbers)
console.log("Epsilon:", Number.EPSILON);

// 12. Negative zero
let negZero = -0;
console.log("Negative zero:", negZero);
console.log("Is -0 === 0?:", negZero === 0); // true (JS quirk)
console.log("Object.is(-0, 0):", Object.is(negZero, 0)); // false

// typeof all numbers (except BigInt) is "number"
console.log("typeof 42:", typeof 42);
console.log("typeof 3.14:", typeof 3.14);
console.log("typeof NaN:", typeof NaN);
console.log("typeof Infinity:", typeof Infinity);
console.log("typeof BigInt:", typeof big);
