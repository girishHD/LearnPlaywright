# Chapter 21 - Classes & Objects (OOP Blueprints)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Classes are blueprints for creating objects with shared structure and behavior. This chapter covers class fundamentals: constructors, methods, static members, private fields, and real-world test automation examples.

---

## Files in This Chapter

### 171_Class_Object.js
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

### 172_Class_Object2.js
Another class example for reinforcement.

### 173_Car..js
Car class blueprint with wheels, doors, and related properties.

### 174_REAL_Browser.js
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

### 175_IQ.js
Object-oriented programming interview questions.

### 176_Private_Public.js
Private fields with `#`:
```js
class APIClient {
  #apiKey;
  constructor(key) { this.#apiKey = key; }
  getAuthHeader() { return `Bearer ${this.#apiKey}`; }
}
```
`#apiKey` is only accessible within the class.

### 177_Static.js
Static properties and methods belong to the class itself, not instances:
```js
class Student {
  static schoolName = "Cave School";
  static display() { }
}
Student.schoolName; // Access without instantiation
```

### 178_Static2.js
Additional static member examples.

---

## Why This Matters

Testing needs organization:
- **Classes**: Model real-world entities. `class TestRunner`, `class APIRequest`, `class PageObject`. Playwright itself uses classes extensively.
- **Private fields**: Hide implementation details (like API keys) from outside access.
- **Static members**: Utility methods that don't need an instance.

---

## What You'll Learn

- Classes: blueprints for objects
- `constructor()` runs when creating instances
- Methods: functions inside classes
- Private fields (`#`) for encapsulation
- Static members (belong to class, not instance)
- Creating instances with the `new` keyword

---

## Key Terms

| Term | Definition |
|---|---|
| Class | Blueprint for creating objects |
| Constructor | A special method that runs when creating an instance |
| Instance | An object created from a class blueprint |
| Method | A function defined inside a class |
| Static | Belongs to the class, not individual instances |
| Private | Accessible only within the class (`#` prefix) |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
