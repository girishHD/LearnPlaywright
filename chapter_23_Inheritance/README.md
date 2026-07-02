# Chapter 23 - Inheritance (Code Reuse through Parent-Child Classes)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Inheritance allows a class (child) to reuse properties and methods from another class (parent). This chapter covers single, multi-level, hierarchical inheritance, the `extends` keyword, `super()` constructor calls, and the Page Object Model pattern.

---

## Files in This Chapter

### 183_Single_Inheritance.js
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

### 184_SI_Example.js
Another single inheritance example for reinforcement.

### 185_Single_Inheritance_Con.js
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

### 186_IQ.js / 187_IQ2.js
Inheritance interview questions.

### 188_REAL_PageObject_Model.js
Page Object Model (POM) pattern using inheritance — base page class with reusable methods extended by specific page classes.

### 189_Multiple_Inheritance.js
JavaScript doesn't support true multiple inheritance. This file demonstrates mixins as an alternative.

### 190_Multi_Level_Inheritance.js
Multi-level inheritance chain: `Grandparent` → `Parent` → `Child`.

### 191_Hierarchical_inheritance.js
Hierarchical inheritance — one parent class shared by multiple child classes.

---

## Why This Matters

Inheritance reduces code duplication:
- Create base page objects with shared navigation, then extend them for specific pages
- Define common test setup/teardown in a parent class
- Override specific behavior in child classes when needed

---

## What You'll Learn

- Inheritance: code reuse with `extends`
- `super()` to call parent constructor
- Single, multi-level, and hierarchical inheritance
- Mixins as a multiple inheritance alternative
- Page Object Model (POM) pattern

---

## Key Terms

| Term | Definition |
|---|---|
| Inheritance | A class inherits properties/methods from another class |
| Parent | The class being inherited from (base/super class) |
| Child | The class that inherits (sub/derived class) |
| extends | Keyword to establish inheritance |
| super() | Calls the parent class constructor |
| Mixin | A pattern for combining behaviors from multiple sources |
| POM | Page Object Model — design pattern for test automation |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
