let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed - 3
// How mant test cases are passed? - 1
// What is the status code that you have got for the fail? - 404

for (i = 0; i < testMatrix.length; i++) {
    for (j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
}

console.log("---------------------");

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log();
}

console.log("---------------------");

//forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
})