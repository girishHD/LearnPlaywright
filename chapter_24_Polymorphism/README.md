# Chapter 24 - Polymorphism (Many Forms)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Polymorphism means "many forms" — the same method name can behave differently depending on the object type. In JavaScript, this is achieved through method overriding in child classes.

---

## Files in This Chapter

### 192_Method_Overriding.js
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

Polymorphism enables flexible test code:
- Swap implementations (e.g., mock vs real API client) without changing test code
- Define a common interface in a parent class, override in children
- Write generic test runners that work with any page object

---

## What You'll Learn

- Method overriding: child redefines a parent method
- Dynamic dispatch: the correct method runs based on the object type
- Polymorphism through inheritance

---

## Key Terms

| Term | Definition |
|---|---|
| Polymorphism | Same interface, different implementations |
| Method Overriding | Child class redefines a parent method |
| Dynamic Dispatch | JavaScript decides which method to call at runtime |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
