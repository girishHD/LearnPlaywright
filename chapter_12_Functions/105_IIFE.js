(function () {
    console.log("This is IIFE - Immediately Invoked Function Expression");
})();

// This is not resuable function, it is executed immediately after its definition. It is used to create a new scope
// and avoid polluting the global namespace.
// Arrow Function and IIFE are difficult to debug.

(function () {
    console.log("Statging");
})();

(() => {
    console.log("Setup Complete");
})();