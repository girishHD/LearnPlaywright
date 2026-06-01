function outer() {
    let message = "Hello";
    console.log("Outer Called!");
    function inner() {
        console.log(message); // Accessing variable from outer scope
    }
    return inner; // Returning the inner function
}

let fn_inner = outer(); // Calling outer function and getting inner function
fn_inner(); // Calling the inner function, it still has access to the message variable

inner(); // ReferenceError: inner is not defined 


