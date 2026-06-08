// Primitive vs Reference Types

let a = 10;
let b = a;
b = 99;
console.log(a);

console.log("---------------------------")
// Objects - copied by REFERENCE, Call by Ref
// Reference - Object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);