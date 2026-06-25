class BankAccount {
    #balance = 0;   // private-field - hidden from outside
    //  private balance = 0      // In TS we declare in that way

    deposite(amount) {
        if (amount > 0) {
            this.#balance += amount;   // this.#balance = this.#balance + amount;
        }
    }

    getBalance() {
        return this.#balance;  // controlled access
    }
}

const account = new BankAccount();
account.deposite(100);
console.log(account.getBalance());

// console.log(account.balance);  // undefined (no public field by that name)
