# Chapter 04 - JavaScript Concepts (Variable Declarations and Hoisting)

---

## What This Chapter Is

This chapter covers the three variable declaration keywords in JavaScript — `var`, `let`, and `const` — along with scope rules and hoisting behavior. Understanding these differences is essential for writing predictable, bug-free code.

---

## Files in This Chapter

### 09_var_let_const.js
Side-by-side comparison of all three declaration types:
- `var` — Function-scoped, flexible but can leak outside blocks
- `let` — Block-scoped, modern recommended approach
- `const` — Block-scoped, cannot be reassigned after declaration

### 10_functions.js
Simple function declaration and invocation.

### 11_var_explained.js
Deep dive into `var` behavior — function-scoped, hoisted, and prone to leaking outside block scopes.

### 12_let_explained.js
Deep dive into `let` — block-scoped, no scope leakage, preferred over `var`.

### 13_const_explained.js
Deep dive into `const` — block-scoped, cannot be reassigned, used for values that should not change.

### 14_var_functionscope.js
Demonstrates that `var` ignores block scope (`{}`) but respects function scope.

### 15_let_scope.js
Demonstrates that `let` respects block scope and stays within its enclosing `{}`.

### 16_Hoisting.js
Hoisting behavior: JavaScript moves `var` declarations to the top of their scope. The variable exists but is `undefined` until the assignment line.

### 17_hoisting_fn.js
Function declarations are also hoisted — you can call a function before its definition appears in the code.

### 18_let_joisting.js
`let` is hoisted but NOT initialized. Accessing it before declaration causes a ReferenceError (Temporal Dead Zone / TDZ).

### 19_let_hoisting_block.js
Further examples of `let` hoisting within block scopes.

### 20_let_const.js
`let` vs `const` differences with practical examples.

### 21_Jr_Qa.js
Demonstrates ReferenceError when accessing a `const` variable before its declaration.

---

## Why This Matters

Choosing the right declaration keyword prevents bugs:
- `const` for values that never change
- `let` for values that do change
- `var` for legacy code compatibility

Understanding hoisting prevents confusion about execution order and variable availability.

---

## What You'll Learn

- The three declaration keywords and when to use each
- Scope: where variables are accessible in code
- `var` has function scope, `let` and `const` have block scope
- `const` prevents reassignment
- Hoisting: declarations are moved to the top of their scope
- Temporal Dead Zone (TDZ) for `let` and `const`

---

## Key Terms

| Term | Definition |
|---|---|
| var | Function-scoped declaration, hoisted with `undefined` |
| let | Block-scoped declaration, hoisted with TDZ |
| const | Block-scoped declaration, cannot be reassigned |
| Scope | The region of code where a variable is accessible |
| Hoisting | The behavior of moving declarations to the top of their scope |
| TDZ | Temporal Dead Zone — time between hoisting and initialization |
| Block | Code enclosed in `{}` |
