const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log("-----------------");
const user = { name: "John", age: 39 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

console.log("-----------------");

//Objects.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key);
})

console.log("-----------------");
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})