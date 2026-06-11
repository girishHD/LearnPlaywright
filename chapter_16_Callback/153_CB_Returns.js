function calculate(a, b, opereation) {
    return opereation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log("Sum is " + sum);