function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        getCount() { return count }
    }
}

let counter1 = makeCounter(5);
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getCount()); // 8
counter1.decrement();
console.log(counter1.getCount()); // 7