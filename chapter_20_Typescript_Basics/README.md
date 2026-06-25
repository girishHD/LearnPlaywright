# Chapter 20 - TypeScript Basics (Code Organization with Modules and Classes)

---

## What This Chapter Is

This final chapter covers OOP fundamentals in JavaScript:
1. **Export/Import**: Sharing code between files using ES6 modules
2. **Classes (OOP)**: Blueprints for creating objects with shared structure and behavior
3. **Encapsulation**: Data hiding with private fields, getters, and setters
4. **Inheritance**: Code reuse through parent-child class relationships
5. **Polymorphism**: Method overriding for many forms of behavior

---

## Files in This Chapter

### 01_EXPORT_IMPORT/

#### 168_EXPORT_IMPORT.js
Import from other files:
```js
import { BASE_URL, formatTestName } from "./testutils.js";
```
Uses `BASE_URL` (web address) and `formatTestName()` from a separate file.

#### 169_Utils.js / 170_Logger.js / testutils.js / utils.js / logger.js
Utility files that EXPORT values for other files:
- `export const BASE_URL = "..."` — share a variable
- `export function formatTestName(name) { }` — share a function
- `export default log` — share a default export

Named exports (destructured with `{}`) vs Default exports (imported without `{}`).

#### ExplainDefault.md
Documentation explaining default vs named exports.

---

### 02_CLASS_OBJECT/

#### 171_Class_Object.js
Basic `Person` class:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
let ugg = new Person("Ugg", 30);
ugg.greet(); // "Hello, I'm Ugg"
```
`new Person(...)` creates an instance from the class blueprint.

#### 172_Class_Object2.js
Another class example for reinforcement.

#### 173_Car.js
Car class blueprint with wheels, doors, and related properties.

#### 174_REAL_Browser.js
Real test automation example — `TestCase` class:
```js
class TestCase {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
  display() { console.log(`${this.name}: ${this.status}`); }
}
```

#### 175_IQ.js
Object-oriented programming interview questions.

#### 176_Private_Public.js
Private fields with `#`:
```js
class APIClient {
  #apiKey;
  constructor(key) { this.#apiKey = key; }
  getAuthHeader() { return `Bearer ${this.#apiKey}`; }
}
```
`#apiKey` is only accessible within the class.

#### 177_Static.js
Static properties and methods belong to the class itself, not instances:
```js
class Student {
  static schoolName = "Cave School";
  static display() { }
}
Student.schoolName; // Access without instantiation
```

#### 178_Static2.js
Additional static member examples.

#### Calculator.js / Student.js
Extra class examples — Calculator with arithmetic, Student with name/grade.

---

### 03_ENCAPSULATION/

#### 179_Ecap.js
Encapsulation basics — private fields with `#`:
```js
class BankAccount {
  #balance;
  constructor(initial) { this.#balance = initial; }
  getBalance() { return this.#balance; }
}
```
`#balance` is private — cannot be accessed from outside the class.

#### 180_REAL_EXAMPLE.js
Real-world banking example with deposit/withdraw methods and private balance.

#### 181_Ecap_Car.js
Car class with private fuel level, public drive method.

#### 182_Ecap_Bank.js
Bank account with getter/setter for balance, including validation.

#### EX1.js — EX5.js
Practice exercises for encapsulation concepts.

---

### 04_INHERITANCE/

#### 183_Single_Inheritance.js
Basic inheritance — `Child` extends `Parent`:
```js
class Parent {
  display() { console.log("Parent"); }
}
class Child extends Parent { }
let c = new Child();
c.display(); // "Parent" (inherited)
```
`extends` keyword creates a parent-child relationship.

#### 184_SI_Example.js
Another single inheritance example for reinforcement.

#### 185_Single_Inheritance_Con.js
Inheritance with constructors — `super()` calls the parent constructor:
```js
class Parent {
  constructor(name) { this.name = name; }
}
class Child extends Parent {
  constructor(name, age) {
    super(name); // call parent constructor
    this.age = age;
  }
}
```

#### 186_IQ.js / 187_IQ2.js
Inheritance interview questions.

#### 188_REAL_PageObject_Model.js
Page Object Model (POM) pattern using inheritance — base page class with reusable methods extended by specific page classes.

#### 189_Multiple_Inheritance.js
JavaScript doesn't support true multiple inheritance. This file demonstrates mixins as an alternative.

#### 190_Multi_Level_Inheritance.js
Multi-level inheritance chain: `Grandparent` → `Parent` → `Child`.

#### 191_Hierarchical_inheritance.js
Hierarchical inheritance — one parent class shared by multiple child classes.

---

### 05_Polymorphism/

#### 192_Method_Overriding.js
Method overriding — child class redefines a parent method:
```js
class Animal {
  speak() { console.log("Animal speaks"); }
}
class Dog extends Animal {
  speak() { console.log("Dog barks"); }
}
```
Same method name, different behavior based on the object type.

---

## Why This Matters

Testing needs organization:
- **Export/Import**: Keep test helpers in one place, use everywhere. Don't rewrite the same function.
- **Classes**: Model real-world entities. `class TestRunner`, `class APIRequest`, `class PageObject`. Playwright itself uses classes extensively.
- **Encapsulation**: Hide internal state behind public methods. Tests don't need to know how a page object works internally.
- **Inheritance**: Create base page objects with shared navigation, then extend them for specific pages.
- **Polymorphism**: Swap implementations (e.g., mock vs real API client) without changing test code.

---

## What You'll Learn

- `export` and `import` for sharing code between files
- Named exports (`{}`) vs Default exports
- Classes: blueprints for objects
- `constructor()` runs when creating instances
- Methods: functions inside classes
- Private fields (`#`) for encapsulation
- Static members (belong to class, not instance)
- Encapsulation: hiding internal data with private fields & getters/setters
- Inheritance: code reuse with `extends` and `super()`
- Polymorphism: method overriding for dynamic behavior

---

## The Complete Journey

| # | Name | Topic |
|---|---|---|
| 1 | Basics | First program |
| 2 | JS Concepts | Variable declarations |
| 3 | Identifiers | Naming rules |
| 4 | var/let/const | Declaration keywords |
| 5 | Literals | Data types |
| 6 | Operators | Computation tools |
| 7 | If-Else | Conditional logic |
| 8 | Switch | Multi-branch selection |
| 9 | User Input | Interactive programs |
| 10 | Loops | Repetition |
| 11 | Arrays | Ordered collections |
| 12 | Functions | Reusable code |
| 13 | Strings | Text manipulation |
| 14 | Objects | Structured data |
| 15 | 2D Arrays | Grids and matrices |
| 16 | Callbacks | Async fundamentals |
| 17 | Promises | Clean async handling |
| 18 | Async/Await | Synchronous-style async |
| 19 | Playwright | Browser automation |
| 20 | Export/Class | Modules, OOP, Encapsulation, Inheritance, Polymorphism |
