let str = "Login_Test_Pass_001";
// slice(startIndex, endIndex) - It extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(str.slice(0, 5)); // Output: "Login"  [0, 4] - 5 is not included
console.log(str.slice(6, 10)); // Output: "Test"
console.log(str.slice(11)); // Output: "Pass_001" (from index 11 to the end of the string)

let testNumber = str.slice(-3); // Extracts the last 3 characters
console.log(testNumber); // Output: "001"

console.log(str.includes("Test")); // Output: true
console.log(str.includes("Fail")); // Output: false

// substring(startIndex, endIndex) - Similar to slice() but does not accept negative indices. It also returns a new string.
console.log(str.substring(0, 5)); // Output: "Login"
console.log(str.substring(6, 10)); // Output: "Test"
console.log(str.substring(11)); // Output: "Pass_001" (from index 11 to the end of the string)  

console.log(str.at(0)); // Output: "L"

