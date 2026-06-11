//   *
//  ***
// ***** 

let n = 3;

for (let i = 1; i <= n; i++) {
    // let row = "";
    for (let j = 1; j < n; j++) {
        // row += " ";
        process.stdout.write(" ");
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        // row += "*";
        process.stdout.write("*");
    }
    // console.log(row.trim());
    console.log();
}