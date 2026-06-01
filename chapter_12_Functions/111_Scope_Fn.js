// Scope in Functions

let env = "staging";

function setupConfig() {
    let timeout = 3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log("---------------");
console.log(env);
console.log("---------------");
console.log(timeout); // ReferenceError: timeout is not defined