function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
add(...num); // Spread operator to spread the array elements as individual arguments to the function.
console.log(add(...num));

console.log("---------------");

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

hasError(...responseCodes); // Spread operator to spread the array elements as individual arguments to the function.
console.log(hasError(...responseCodes)); // true
