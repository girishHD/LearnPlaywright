// Slicing and Combining
let arr = [1, 2, 3, 4, 5];
// slice(start, end) => slice(start, end-1)
console.log(arr.slice(1, 3));   // => (1, 2)

console.log(arr.slice(2, 4));
console.log(arr.slice(2, 5));

console.log(arr.slice(2));  // doesn't specify end

// start from -1 and till 2
console.log(arr.slice(-2)); // -2, -1

console.log(arr.slice(0));

