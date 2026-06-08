// Objects
// Key and values

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "pramod" };
let student3 = { name: "Akash", age: "27", phonre: "8180900964" };

// Key will not be in double quote

// below key is in double quote is actually JSON
let JSON_student4 = { "name": "Akash", "age": 67, "phone": 9876543201 };

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let b = a;
console.log(b.status);

b.status = "fail";
console.log(b.status);
console.log(a.status);

console.log(a === b);