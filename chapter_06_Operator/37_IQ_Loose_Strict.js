console.log(0 == ""); // true  ->  "" converted to 0
console.log(0 == "0"); // true  ->  "0" converted to 0
console.log("" === "0"); // false -> strict comparison 9transitivity broken)

console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);

