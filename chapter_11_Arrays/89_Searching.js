let results = ["pass", "fail", "pass", "error", "fail"];

// indexof - return first index or -1 of if not founf
results.indexOf("fail");  // 1
console.log(results.indexOf("fail"));

results.indexOf("skip");  // -1
console.log(results.indexOf("skip"));

console.log("-----------------");

// lastIndexOf - searches from end
results.lastIndexOf("fail");  // 4
console.log(results.lastIndexOf("fail"));

console.log("-----------------");

// includes - return boolean
results.includes("error"); // true
console.log(results.includes("error"));

results.includes("skip"); // false
console.log(results.includes("skip"));

console.log("-----------------");

// find - returns first matching element
let nums = [10, 25, 30, 45];
nums.find(x => x > 20); // 25
console.log(nums.find(x => x > 20));

// findIndex - returns first matching index
nums.findIndex(n => n > 20); // 1
console.log(nums.findIndex(n => n > 20));

nums.findLast(n => n > 20); //45
console.log(nums.findLast(n => n > 20));

nums.findLastIndex(n => n > 20);  //3
console.log(nums.findLastIndex(n => n > 20));