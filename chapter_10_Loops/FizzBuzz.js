// Fizzbuzz Test

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "is Fizzbuzz Number");
    } else if (i % 3 === 0) {
        console.log(i, "is Fizz Number");
    } else if (i % 5 === 0) {
        console.log(i, "is Buzz Number");
    } else {
        console.log(i, "Can't know which number it is")
    }
}