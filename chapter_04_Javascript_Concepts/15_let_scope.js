let a = 10;
console.log(a); // Global scope

function printHello() {
    console.log("Hello");
    let a = 20; // local scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log("Blockled scope: ", a);
    }
    console.log("F -> ", a);
}

printHello();

console.log("G -> ", a);