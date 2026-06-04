// Searching & Checking Strings

let url = "https://www.example.com";

// 1. includes() method
console.log(url.includes("example")); // Output: true
console.log(url.includes("test"));    // Output: false 

console.log('-----------------------------');

// 2 startsWith() method
console.log(url.startsWith("https")); // Output: true

console.log('-----------------------------');

// 3. endsWith() method
console.log(url.endsWith(".com")); // Output: true

console.log('-----------------------------');

// 4. indexOf() / lastIndexOf() method
console.log(url.indexOf("w")); // Output: 8
console.log(url.indexOf("test")); // Output: -1 (not found)
console.log(url.lastIndexOf("e")); // Output: 18 (last occurrence of 'e')  
console.log(url.lastIndexOf("l")); // Output: 17 (last occurrence of 'l')

console.log('-----------------------------');

// 5. search() method with regular expression
console.log(url.search(/example/)); // Output: 12 (position of "example")
console.log(url.search(/test/));    // Output: -1 (not found)   

// /regrex/ - Regular Expression - These are nothing but patterns that we can use to match character combinations in strings.
// They are used with the search() method to find specific patterns in a string.  