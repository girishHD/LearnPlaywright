let c = { status: "pass" };
let d = { status: "pass" };

// diiferent location created in heap memory
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}