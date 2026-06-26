class Calculator {
    constructor(no1, no2) {
        this.num1 = no1;
        this.num2 = no2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    devide() {
        return this.num1 / this.num2;
    }

    mod() {
        return this.num1 % this.num2;
    }
}


const cal = new Calculator(20, 5);
console.log(cal.add());
console.log(cal.subtract())
console.log(cal.multiply())
console.log(cal.devide())
console.log(cal.mod())