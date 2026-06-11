function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing!")
})

console.log("-------------------------");

// Callback with parameters
function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("LoginTest", function (name, result) {
    console.log(name + " -> " + result);
});

console.log("-------------------------");

// Sync Callback _ forEach
let bugs = ["UI glitch", "API Timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug # " + (i + 1) + ": " + bug);
});

console.log("Total bugs: " + bugs.length);