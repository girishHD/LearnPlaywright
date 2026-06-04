// String Reverse
// ✅ String Reverse | Palindrome Program
// Given a string , Reverse it and print true if they are same.

let str = "Madam is palindrome, pramod is not";

let l = str.length;
let str_reverse = "";

for (i = l - 1; i >= 0; i--) {
    str_reverse = str_reverse + str[i];
}

console.log(str_reverse);