function print() {
    console.log("Normal Function");
}

function placeOrder(ClipboardItem, callback) {
    console.log("Hi, Your order is placed:", ClipboardItem);
    callback();
}

// First Way
placeOrder("Pizza", print);

// Second Way
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function without name!");
});

// Third Way - Arrow Fn
// Second Way
placeOrder("Momo", () => {
    console.log("Anoy Fn, I am also a function without name!");
});