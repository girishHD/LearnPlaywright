// Anagram

let str1 = "Eat";
let str2 = "Tea";

const a = str1.toLowerCase().split("").sort().join();
const b = str2.toLowerCase().split("").sort().join();

if (a === b) {

    console.log(str1 + " & " + str2 + " -> Anagram");
} else {
    console.log(str1 + " & " + str2 + " -> Not Anagram");
}