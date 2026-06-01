function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

runTest("Login Test", "Pass", 120); // No Output

const r = runTest("Regression Test", "Pass", 100);
console.log(r);

