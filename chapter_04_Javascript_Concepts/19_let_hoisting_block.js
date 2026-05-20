// let is Blocked-Scoped

let x = "global";
if (true) {
    // TDZ for blocked-scoped "x" starts here
    // console.log(x); // ReferenceError (NOT "global" )
    console.log(x);

    let x = "block"; // TDZ ends here, "x" is initialized with "block"
    console.log(x); // block
}

console.log(x);