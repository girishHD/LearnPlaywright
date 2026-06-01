let g_x = 10;

// Nested Scope | blocke scope
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    console.log(y);
}

outer();  // ReferenceError: y is not defined