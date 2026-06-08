const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);  // { name: 'John', age: 30, email: 'john@example.com' }
console.log(user.name);  // John
console.log(user["age"]); // 30

console.log("--------------------");
// Dynamic Property access
const key = "age";
console.log(user[key]);

console.log("--------------------");

// Adding/ Modifying properties
user.city = "NYC";
user.age = 31;
console.log(user);
console.log("--------------------");


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: 'Login',
//   writable: true,   <- can change the value
//   enumerable: true, <- show in for...in/ Object.keys()
//   configurable: true <- can delete or redefine
// }