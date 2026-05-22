if ("hello") console.log("String is thruthy");
if (42) console.log("Number is thruthy");
if ({}) console.log("Empty object is thruthy");
if (([])) console.log("Empty array is thruthy");

if ("") console.log("Won't print");  // false condition
if (null) console.log("Won't print");  // false condition
if (undefined) console.log("Won't print");  // false condition
if (NaN) console.log("Won't print");  // false condition
if (0) console.log("Won't print");  // false condition

let name = undefined;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}
