// Higher Order Function
// A higher-order function is a function that takes another function as an argument or returns a function as a result.
// It allows us to create more flexible and reusable code by abstracting away common patterns of behavior.

function runWithLoggin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFailed() {
    return "fail";
}

const result = runWithLoggin(loginTest, "Login Test");
console.log(result);

const result1 = runWithLoggin(loginTestFailed, "Dashboard Failed Test");
console.log(result1);
