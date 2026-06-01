// Arrow Function (ES6)
const greet = function (name) {
    return name;
}

console.log(greet("Pramod"));

console.log("---------------");

const greet2 = (name) => name;
console.log(greet2("Bob"));

console.log("---------------");

const doubleIt = n => n * 2;
console.log(doubleIt(10));

console.log("---------------");

const printIt = name => console.log(name);
printIt("Dutta");

console.log("---------------");

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;  // Parameter => return type;
console.log(add(10, 20));
console.log(add2(5, 15));


function say() {
    console.log("Hello");
}

const say1 = () => console.log("Hello");
const say2 = () => "Hello";
say1();
console.log(say2());

console.log("---------------");

const greet1 = name => {
    const message = "Hi " + name;
    return message;
}
console.log(greet1("Ujjwal"));