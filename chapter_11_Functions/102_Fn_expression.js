// Normal Function
function sayName(name) {
    return `"Hello", $P\{name}!`;
}

// Function Expression
const greet = function (name) {
    return `"Hello", ${name}!`;
}

let r = greet("Girish");
console.log(r);