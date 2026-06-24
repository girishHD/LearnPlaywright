# Chapter 20 - TypeScript Basics (Code Organization with Modules and Classes)

---

## What This Chapter Is

This final chapter covers two major topics:
1. **Export/Import**: Sharing code between files using ES6 modules
2. **Classes (OOP)**: Blueprints for creating objects with shared structure and behavior

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

## Why This Matters

Testing needs organization:
- **Export/Import**: Keep test helpers in one place, use everywhere. Don't rewrite the same function.
- **Classes**: Model real-world entities. `class TestRunner`, `class APIRequest`, `class PageObject`. Playwright itself uses classes extensively.

---

## What You'll Learn

- `export` and `import` for sharing code between files
- Named exports (`{}`) vs Default exports
- Classes: blueprints for objects
- `constructor()` runs when creating instances
- Methods: functions inside classes
- Private fields (`#`) for encapsulation
- Static members (belong to class, not instance)

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
| 20 | Export/Class | Modules & OOP |
