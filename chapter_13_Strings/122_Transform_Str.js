let str = "    Hello World!    ";

console.log(str.toUpperCase()); // Output: "    HELLO WORLD!    "
console.log(str.toLowerCase()); // Output: "    hello world!    "   
console.log(str.trim()); // Output: "Hello World!" (removes leading and trailing whitespace)
console.log(str.trimStart()); // Output: "Hello World!    " (removes leading whitespace)
console.log(str.trimEnd()); // Output: "    Hello World!" (removes trailing whitespace)

let msg = "Test: FAIL. Retry: FAIL.";
let msg1 = msg.replace("FAIL", "PASS"); // Output: "Test: PASS. Retry: FAIL." (replaces only the first occurrence)
console.log(msg1);

let msg2 = msg.replaceAll("FAIL", "PASS");
console.log(msg2);

console.log(msg.replace(/FAIL/g, "PASS"));

// Concatenation
console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "Our World"));
console.log(`${"Hello"} ${"Tester"}`);

let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));

console.log("pass,fail,skip".split(","));

let r = "test_login_pass".split("_").join(" ");
console.log(r);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);