// Pallidrome String

let str = "Madam";
str = str.toUpperCase();
let str_reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    str_reverse = str_reverse + str[i];
}

if (str === str_reverse) {
    console.log(str, "is Pallidrome string");
} else {
    console.log(str, "is not Pallidrome string");
}



