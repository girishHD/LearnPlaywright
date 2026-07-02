# Chapter 12 - Functions (Creating Reusable Code)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Functions are reusable blocks of code that perform specific tasks. Instead of duplicating logic, you define it once, give it a name, and call it whenever needed. This chapter covers all JavaScript function patterns with 22 files.

---

## Files in This Chapter

### 96_Functions.js
Basic function: `function myFunction() { }` then `myFunction()` to execute.

### 97_Type1_Fn_Basic_Function.js
Type 1: No parameters, no return value. Just executes statements.

### 98_Type2_Fn_With_Param_No_Return.js
Type 2: Accepts parameters but returns nothing.

### 99_Type3_Fn_Without_Param_Return_Type.js
Type 3: No parameters but returns a value.

### 100_Type4_Fn_With_Param_With_Return.js
Type 4: Accepts parameters AND returns a value. The most useful pattern.

### 101_Template_Literal.js
Using template literals inside functions for string construction: `` greet(name) { return `Hello ${name}!`; } ``.

### 102_Fn_expression.js
Function expression: storing a function in a variable. `let cook = function(meat) { }`.

### 103_Arrow_Fn.js
Arrow functions: shorter syntax. `let add = (a, b) => a + b`. No `function` keyword needed; implicit return for single-expression bodies.

### 104_Arrow_Fn_REAL.js
Real-world arrow function usage in modern codebases.

### 105_IIFE.js
Immediately Invoked Function Expression — runs immediately when defined. Syntax: `(function(){...})()`. Also arrow IIFE: `(() => {...})()`.

### 106_Default_Param_Fn.js
Default parameters: `function hunt(weapon = "spear")` — uses default when argument is omitted.

### 107_IQ.js
Function interview questions.

### 108_Rest_Param_Fn.js
Rest parameters (`...args`): collect all remaining arguments into an array. `function eatAll(...foods)`.

### 109_IQ.js
Additional interview questions.

### 110_Spread_IQ.js
Spread operator (`...`): expand an array into individual elements. `Math.max(...[1, 5, 3])`.

### 111_Scope_Fn.js
Function scope: variables inside a function are not accessible outside. Outer variables are accessible inside.

### 112_IQ.js
Scope interview questions.

### 113_Closure.js
Closure: an inner function retains access to the outer function's variables even after the outer function has returned.

### 114_Closure1.js
Additional closure examples.

### 115_API_REAL_Closure.js
Practical QA use: `makeRetryTracker(max)` — a closure that tracks retry counts for test automation.

### 116_Higher_Order_Fn.js
Higher-order function: a function that takes another function as an argument or returns a function.

### 117_Pure_Fn.js
Pure function: same input always produces the same output with no side effects.

---

## Why This Matters

Functions are the most important concept in programming. Playwright tests are functions. Closures are powerful for QA: retry counters, test data generators, and config factories.

---

## What You'll Learn

- 4 function types (param/no param, return/no return)
- Function expressions
- Arrow functions
- IIFE (run immediately)
- Default parameters
- Rest and spread operators
- Scope rules
- Closures
- Higher-order functions
- Pure functions

---

## Key Terms

| Term | Definition |
|---|---|
| Function | A reusable block of code |
| Parameter | Input value passed to a function |
| Return | Value output by a function |
| Arrow Function | Shorter function syntax using `=>` |
| IIFE | Function that runs immediately |
| Closure | Function that retains access to outer scope |
| Higher-Order | Function that operates on other functions |
| Pure Function | Deterministic function with no side effects |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
