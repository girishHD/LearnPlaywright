let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // sorting based on first character

let a = ["chill", "children", "child"];
console.log(a.sort());

let number = [3, 1, 4];
console.log(number.sort());

let nums = [10, 1, 21, 2];
console.log(nums.sort());  // Natural Sorting, Lexicographic Sorting

nums.sort((a, b) => a - b); // Ascending Sorting
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);  // Descending Sorting

