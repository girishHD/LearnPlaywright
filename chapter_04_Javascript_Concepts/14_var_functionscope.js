var a = 10;
console.log(a); // Global scope

function printHello() {
    console.log("Hello");
    var a = 20; // local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F -> ", a);
}

printHello();

console.log("G -> ", a);