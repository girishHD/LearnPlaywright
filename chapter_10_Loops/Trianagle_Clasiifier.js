// Triangle Classifier 

let a = 10, b = 20, c = 10;

if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a == b || b == c || a == c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalence Triangle");
}