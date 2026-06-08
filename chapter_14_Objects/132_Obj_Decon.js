const user = { name1: "John", age: 30, city: "NYC" };

// Basic Destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);
console.log("-----------------");

// Rename Variable
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);
console.log("-----------------");


// destructuring
// const { age } = user;
// console.log(age);

// Default Value
const { country = "USA" } = user;
console.log(country);
console.log(user);
console.log("-----------------");

const data = {
    user1:
    {
        name: "John",
        address:
        {
            city: "LONDON"
        }
    }
};

// const { user1: user2, user1: { address: { city } } } = data;
// console.log(user2);
const { user1, user1: { address: { city } } } = data;
console.log(user1);

console.log(data.user1.address.city);

