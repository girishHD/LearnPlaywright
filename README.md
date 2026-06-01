# Learn Playwright

A comprehensive, hands-on JavaScript learning resource designed for QA engineers and automation professionals looking to master Playwright test automation. This repository covers JavaScript fundamentals — from basic syntax to advanced concepts — with real-world QA/testing scenarios throughout.

---

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Learning Roadmap](#learning-roadmap)
- [Chapters](#chapters)
- [Usage](#usage)

---

## About

This course is structured into 12 progressive chapters that build JavaScript proficiency step-by-step. Each chapter focuses on a core concept and includes practical examples, interview questions (IQ), and real-world test automation scenarios. By the end, you'll have a solid foundation in JavaScript for writing Playwright tests.

**Total files:** ~140+ code examples across 12 chapters.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- A modern web browser (for `.html` examples)
- Basic familiarity with the command line

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd LearnPlaywright
   ```

2. **Run a JavaScript file:**

   ```bash
   node chapter_01_Basics/01_Basics.js
   ```

3. **Open HTML files** in your browser to view console output:

   ```bash
   start chapter_03_Identifier_Literals/01_identifier_rules.html
   ```

---

## Learning Roadmap

| Step | Chapter | Topic | Goal |
|------|---------|-------|------|
| 1 | 01 | Basics | Set up environment, run first JS code, understand hot code paths |
| 2 | 02 | JS Concepts | Variable declaration with `var` |
| 3 | 03 | Identifiers & Literals | Naming rules, comments, VS Code shortcuts |
| 4 | 04 | JS Concepts II | `var`, `let`, `const`, hoisting, scope, functions |
| 5 | 05 | Literals | Null/undefined, numbers, strings, template literals |
| 6 | 06 | Operators | All JS operators with practical tasks |
| 7 | 07 | If/Else | Conditional logic, real-world QA scenarios |
| 8 | 08 | Switch | Switch-case flow control |
| 9 | 09 | User Input | Prompt, readline, prompt-sync |
| 10 | 10 | Loops | For/while/do-while, for...of/in, FizzBuzz |
| 11 | 11 | Arrays | CRUD, search, transform, sort, slice, concat |
| 12 | 12 | Functions | Function types, expressions, arrow functions, closures, IIFE, higher-order functions |

---

## Chapters

### Chapter 01 — Basics
**Topics:** Hello World, loops, environment setup, hot code paths

Files: `01_Basics.js`, `02_JS.js`, `03_Verify_Setup.js`, `04_HotCode.js`

---

### Chapter 02 — JavaScript Concepts
**Topics:** Variable declaration with `var`

Files: `05_JS_Basics.js`

---

### Chapter 03 — Identifier & Literals
**Topics:** JavaScript identifier rules, naming conventions, comments, VS Code keyboard shortcuts (Windows & Mac)

Files:
- `06_Identifiers_Rules.js`, `07_Identifier_Part2.js`, `08_Comments.js`
- `01_identifier_rules.html`
- `VS_Code_Keyborad_Shortcut_windows.md`, `VS_Code_Keyborad_Shortcut_mac.md`

---

### Chapter 04 — JavaScript Concepts
**Topics:** Variable declarations (`var`, `let`, `const`), functions, hoisting, function scope vs block scope

Files: `09_var_let_const.js` – `21_Jr_Qa.js` (13 files)

---

### Chapter 05 — Literal
**Topics:** Literals, null vs undefined, numbers (all types), strings, template literals, backtick vs single vs double quotes

Files: `22_Literals.js` – `29_Backtick_single_double.js` (8 files)

---

### Chapter 06 — Operator
**Topics:** Assignment, arithmetic, modulus, exponentiation, compound, comparison (strict/loose), logical, string concatenation, ternary, typeof, increment/decrement, nullish coalescing, interview questions, practical tasks

Files: `30_Assignment_OP.js` – `47_Advance_ID.js`, `Task_1.js`, `Task_2.js` (20 files)

---

### Chapter 07 — If/Else
**Topics:** Conditional logic with real-world QA/test automation scenarios — bug severity, health reporter, login lockout, pass/fail verdict, HTTP status codes, grade calculation, leap year detection

Files: `48_IF_ELSE.js` – `58_LEAP_YEAR.js`, `Bug_Severity.js`, `Health_Reporter.js`, `Login_Lockout.js`, `Pass_Fail_Verdict.js`, `Status_Code.js` (16 files)

---

### Chapter 08 — Switch Statement
**Topics:** Switch-case flow control, fall-through (no break), default case, grouping cases, real-time QA examples, interview questions

Files: `59_Switch.js` – `67_IQ4.js` (9 files)

---

### Chapter 09 — User Input
**Topics:** Browser prompt, Node.js readline module, prompt-sync package

Files: `68_User_Input.js`, `69_Node_readline.js`, `70_prompy_sync.js`

---

### Chapter 10 — Loops
**Topics:** `for`, `while`, `do-while` loops, `for...of` / `for...in`, FizzBuzz, triangle classifier, interview questions

Files: `71_For_Loop.js` – `82_IQ.js`, `FizzBuzz.js`, `Trianagle_Clasiifier.js` (14 files)

---

### Chapter 11 — Arrays
**Topics:** Array creation, element access, adding/removing elements, searching, iteration, transformation (map/filter/reduce), sorting, slicing, concatenation, type checking, real-world example

Files: `83_Arrays.js` – `95_Array_Checking.js` (13 files)

---

### Chapter 12 — Functions
**Topics:** Function types (basic, parameterized, return types), function expressions, arrow functions, IIFE, default parameters, rest parameters, scope, closures, higher-order functions, pure functions, real-world API examples, interview questions

Files: `96_Functions.js` – `117_Pure_Fn.js` (22 files)

---

## Usage

Run any JavaScript file with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
```

Open HTML files in a browser to view console output:

```bash
start chapter_03_Identifier_Literals/01_identifier_rules.html
```

Install optional packages (for chapter 09 prompt-sync example):

```bash
npm install prompt-sync
```
