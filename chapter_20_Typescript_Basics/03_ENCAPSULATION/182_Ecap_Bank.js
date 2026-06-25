class ICIC {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed");
        }
    }
}

let pramod = new ICIC("Pramod", 1000);
console.log(pramod.getBalance());
console.log(pramod.setBalance(100000, false));
console.log(pramod.getBalance());

console.log("--------------");
let pramod_father = new ICIC("Pramod_father", 2000);
console.log(pramod_father.getBalance());
console.log(pramod_father.setBalance(300000, true));
console.log(pramod_father.getBalance());
