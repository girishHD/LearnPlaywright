# Chapter 20 - TypeScript Basics (Code Organization with Modules)

---

## What This Chapter Is

This chapter covers the ES6 module system (export/import) for organizing code across files:
1. **Export/Import**: Sharing code between files using ES6 modules

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

## Why This Matters

Testing needs organization:
- **Export/Import**: Keep test helpers in one place, use everywhere. Don't rewrite the same function.

---

## What You'll Learn

- `export` and `import` for sharing code between files
- Named exports (`{}`) vs Default exports

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
| 20 | Export/Import | ES6 modules |
| 21 | Classes & Objects | OOP blueprints |
| 22 | Encapsulation | Data hiding |
| 23 | Inheritance | Code reuse |
| 24 | Polymorphism | Method overriding |
| 25 | OOP Interview Qs | OOP exercises |
| 26 | TypeScript | Type annotations |
| 27 | TypeScript Interfaces | Interface definition |
