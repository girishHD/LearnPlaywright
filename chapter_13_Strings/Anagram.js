// Anagram

let str1 = "Eat";
let str2 = "Tea";

let a = str1.toLowerCase().split('').sort().join('');
// let b = str2.toLowerCase().sort();

console.log(a.sort);

// if (a === b) {
//     console.log(str1 + " & " + str2 + " -> Anagram");
// } else {
//     console.log(str1 + " & " + str2 + " -> Not Anagram");
// }