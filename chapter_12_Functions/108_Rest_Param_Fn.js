// Rest of the param or spread parameter

function logResult(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results}`);
}

logResult('Login Test', 1, 2, 3);
console.log("---------------");
logResult('Registration Test', "Hello", "Girish");

console.log("---------------");

const result = (suiteName, ...results) => {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results}`);
}

result('Payment Test', "Pass", "Fail", "Pass");