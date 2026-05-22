// Question 2 — Test Case Pass/Fail Verdict
// Problem: Compare actual result with expected result and print test verdict.

let expected = "Login Successful"
let actual = "Login Successful"

if (expected === actual) {
    console.log("✅ Test Passed")
} else {
    console.log("❌ Test Failed");
}

let expected_result = "Login Successful"
let actual_result = "Invalid Credentials"

if (expected_result === actual_result) {
    console.log("✅ Test Passed")
} else {
    console.log("❌ Test Failed — Expected: " + expected_result + " Got: " + actual_result);
}

