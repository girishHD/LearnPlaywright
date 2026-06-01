// Return a Value
function getStatus(status) {
    if (status >= 200 && status < 300) return "Success";
    if (status >= 400 && status < 500) return "Client Error";
    if (status >= 500 && status < 600) return "Server Error";
}

getStatus(200); // No Output as we are not printing the return value of the function

const s = getStatus(404);
console.log(s);

console.log("---------------");

function logTest(name) {
    console.log(`Running: ${name}`);
}

let result = logTest("Login Test");
console.log(result); // undefined as logTest does not return anything, it just prints the name of the test.

greet("Alice");

function greet(name) {
    console.log(`Hello, ${name}!`);
}  // No Error as function declaration is hoisted to the top of the scope.

sayHi("BOB");

const sayHi = function (name) {
    console.log(`Hi, ${name}!`);
} // ReferenceError: Cannot access 'sayHi' before initialization as function expression is not hoisted (In TDZ mode).  