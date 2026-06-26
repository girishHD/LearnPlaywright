class Car {
    #engine;

    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());

console.log("------------");
tesla.setEngine("V9");
console.log(tesla.getEngine());
