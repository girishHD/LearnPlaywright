# Chapter 22 - Encapsulation (Data Hiding)

---

## What This Chapter Is

Encapsulation is the practice of hiding internal data and only exposing controlled access through methods. This chapter covers private fields, getters, and setters with real-world banking and car examples.

---

## Files in This Chapter

### 179_Ecap.js
Encapsulation basics — private fields with `#`:
```js
class BankAccount {
  #balance;
  constructor(initial) { this.#balance = initial; }
  getBalance() { return this.#balance; }
}
```
`#balance` is private — cannot be accessed from outside the class.

### 180_REAL_EXAMPLE.js
Real-world banking example with deposit/withdraw methods and private balance.

### 181_Ecap_Car.js
Car class with private fuel level, public drive method:
```js
class Car {
  #fuelLevel;
  drive() { if (this.#fuelLevel > 0) { /* move */ } }
}
```

### 182_Ecap_Bank.js
Bank account with getter/setter for balance, including validation:
```js
class BankAccount {
  #balance;
  get balance() { return this.#balance; }
  set balance(amount) {
    if (amount >= 0) this.#balance = amount;
  }
}
```

---

## Why This Matters

Encapsulation protects data integrity:
- Prevents accidental modification of internal state
- Allows validation logic in setters
- Hides implementation details (users only see the interface)
- Essential for secure code (API keys, passwords, balances)

---

## What You'll Learn

- Private fields (`#`) to hide data
- Getters (`get`) to read private data
- Setters (`set`) to write private data with validation
- Real-world encapsulation patterns

---

## Key Terms

| Term | Definition |
|---|---|
| Encapsulation | Hiding internal data behind public methods |
| Private Field | A field accessible only within the class (`#`) |
| Getter | A method that reads a private value |
| Setter | A method that writes a private value with optional validation |
| Data Hiding | Restricting direct access to an object's internal state |
