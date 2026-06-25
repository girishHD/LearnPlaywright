# Learn Playwright

A comprehensive guide to browser automation with Playwright, covering JavaScript fundamentals through advanced testing concepts.

This repository contains 20 chapters with 200+ exercises designed to take you from programming basics to writing real Playwright test automation. Each chapter includes its own README with detailed explanations of every file.

---

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Chapters](#chapters)
- [Usage](#usage)

---

## About

20 chapters covering JavaScript fundamentals and Playwright testing. Each chapter builds on the previous, starting with basic programming concepts and culminating in Playwright browser automation.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- A web browser (for `.html` files)
- Basic familiarity with the command line

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd LearnPlaywright
   ```

2. **Run a JavaScript file:**

   ```bash
   node chapter_01_Basics/01_Basics.js
   ```

3. **Open an HTML file in browser:**

   ```bash
   start chapter_03_Identifier_Literals/01_identifier_rules.html
   ```

---

## Roadmap

| Step | Chapter | Topic | Practical Application |
|------|---------|-------|----------------------|
| 1 | 01 | Basics | Hello World, variables, loops, functions |
| 2 | 02 | JS Concepts | `var` variable declaration |
| 3 | 03 | Identifiers & Literals | Naming rules, comments |
| 4 | 04 | JS Concepts II | `var` `let` `const`, hoisting, scope, operators |
| 5 | 05 | Literals | Null/undefined, numbers, strings, template literals |
| 6 | 06 | Operators | Arithmetic, comparison, logical, ternary |
| 7 | 07 | If/Else | Conditional logic, bug severity, status codes |
| 8 | 08 | Switch | Multi-condition branching |
| 9 | 09 | User Input | Browser prompt, Node.js readline |
| 10 | 10 | Loops | For, while, do-while, FizzBuzz |
| 11 | 11 | Arrays | Create, access, add, remove, search, transform |
| 12 | 12 | Functions | Declarations, expressions, arrows, closures |
| 13 | 13 | Strings | Properties, search, substring, transform |
| 14 | 14 | Objects | Creation, destructuring, spread, getters/setters |
| 15 | 15 | 2D Arrays | Grids, nested loops, patterns |
| 16 | 16 | Callbacks | Sync/async callbacks, callback hell |
| 17 | 17 | Promises | Pending/fulfilled/rejected, chaining, Promise.all |
| 18 | 18 | Async/Await | Sequential/parallel execution, error handling |
| 19 | 19 | Playwright Basics | Browser automation, test structure, config |
| 20 | 20 | TypeScript Basics | Types, interfaces, generics, modules, OOP |

---

## Chapters

### Chapter 01 — Basics
**Topics:** Hello World, variables, loops, functions, setup verification

Files: `01_Basics.js`, `02_JS.js`, `03_Verify_Setup.js`, `04_HotCode.js`

---

### Chapter 02 — JavaScript Concepts
**Topics:** `var` variable declaration

Files: `05_JS_Basics.js`

---

### Chapter 03 — Identifier & Literals
**Topics:** Naming rules, comments, keyboard shortcuts (Windows & Mac)

Files:
- `06_Identifiers_Rules.js`, `07_Identifier_Part2.js`, `08_Comments.js`
- `01_identifier_rules.html`
- `VS_Code_Keyborad_Shortcut_windows.md`, `VS_Code_Keyborad_Shortcut_mac.md`

---

### Chapter 04 — JavaScript Concepts
**Topics:** Variable declarations (`var`, `let`, `const`), operators, hoisting, function scope vs block scope

Files: `09_var_let_const.js` – `21_Jr_Qa.js` (13 files)

---

### Chapter 05 — Literal
**Topics:** Literals, null vs undefined, number types, strings, template literals, backtick vs single vs double quotes

Files: `22_Literals.js` – `29_Backtick_single_double.js` (8 files)

---

### Chapter 06 — Operator
**Topics:** Assignment, arithmetic, comparison, logical, ternary, typeof, increment/decrement, nullish coalescing

Files: `30_Assignment_OP.js` – `47_Advance_ID.js`, `Task_1.js`, `Task_2.js` (20 files)

---

### Chapter 07 — If/Else
**Topics:** Conditional logic, bug severity, health reporter, login lockout, pass/fail verdict, status codes, leap year

Files: `48_IF_ELSE.js` – `58_LEAP_YEAR.js`, `Bug_Severity.js`, `Health_Reporter.js`, `Login_Lockout.js`, `Pass_Fail_Verdict.js`, `Status_Code.js` (16 files)

---

### Chapter 08 — Switch Statement
**Topics:** Switch syntax, fall-through, default case, grouping cases, QA scenarios

Files: `59_Switch.js` – `67_IQ4.js` (9 files)

---

### Chapter 09 — User Input
**Topics:** Browser prompt, Node.js readline, prompt-sync package

Files: `68_User_Input.js`, `69_Node_readline.js`, `70_prompy_sync.js`

---

### Chapter 10 — Loops
**Topics:** `for`, `while`, `do-while`, `for...of` / `for...in`, FizzBuzz, triangle classifier

Files: `71_For_Loop.js` – `82_IQ.js`, `FizzBuzz.js`, `Trianagle_Clasiifier.js` (14 files)

---

### Chapter 11 — Arrays
**Topics:** Create, access, add/remove, search, iterate, transform (map/filter/reduce), sort, slice/splice, concat

Files: `83_Arrays.js` – `95_Array_Checking.js` (13 files)

---

### Chapter 12 — Functions
**Topics:** Function types (parameter/no parameter, return/no return), expressions, arrow functions, IIFE, default parameters, rest/spread, scope, closure, higher-order functions, pure functions

Files: `96_Functions.js` – `117_Pure_Fn.js` (22 files)

---

### Chapter 13 — Strings
**Topics:** String creation, properties, search/check, substring, transformation, anagram, palindrome, reverse

Files:
- `118_Strings.js`, `119_String_Properties.js`, `120_Search_Check_Str.js`
- `121_Substring.js`, `122_Transform_Str.js`, `123_SC.js`
- `Anagram.js`, `String_Reverse.js`, `Pallidrome_String.js`
- `javascript_stringcheatsheet.md`

---

### Chapter 14 — Objects
**Topics:** Object creation, primitive vs reference, destructuring, spread, getters/setters, const with objects

Files:
- `124_Objects.js`, `125_Objects2.js`, `126_Objects_Creation.js`, `127_Objects_REAL.js`
- `128_Primitive_Ref.js`, `129_Ob_Examples.js`, `130_IQ.js`, `131_Object_Fn.js`
- `132_Obj_Decon.js`, `133_Spread.js`, `134_Objects_GET_SET_Methods.js`
- `135_IQ.js`, `136_Obj_REAL.js`, `137_Let_Const_Obj.js`

---

### Chapter 15 — 2D Array
**Topics:** Grid creation, row/column access, nested loops, test matrices, star/pattern printing

Files:
- `138_2D_Array.js`, `139_2d.js`, `140_REAL.js`
- `141_2D_Array_Fn.js`, `142_IQ_Right_Pattern_Py.js`
- `Print_Reverse_Pattern.js`, `Pyramid_Pattern.js`

---

### Chapter 16 — Callback
**Topics:** Sync/async callbacks, callback patterns, callback hell, Playwright callback patterns

Files:
- `143_Callback.js`, `144_CB.js`, `145_CB_Fn.js`, `146_PW_CB.js`
- `147_JS_CB.js`, `148_Sync_CB.js`, `149_Async_CB.js`
- `150_CB_Hell.js`, `151_CB_Hell_20_Steps.js`
- `152_CB_Parameter.js`, `153_CB_Returns.js`

---

### Chapter 17 — Promises
**Topics:** Promise states (pending/fulfilled/rejected), .then/.catch/.finally, chaining, Promise.all, Promise.allSettled, real API calls

Files:
- `154_Promise.js`, `155_Promise_REAL_API.js`, `156_Promise_REAL_API_PART2.js`
- `157_Finally.js`, `158_Call_Py_Problem.js`
- `159_Promise_ALL.js`, `160_Promise_IQ.js`

---

### Chapter 18 — Async/Await
**Topics:** Async functions, await, try/catch/finally, sequential tasks, parallel execution, refactoring callback hell

Files:
- `161_Async.js`, `162_Async_P2.js`, `163_PyDoom.js`
- `164_Async_Ex.js`, `165_AA_Seq.js`, `166_AA_P.js`
- `167_IQ.js`

---

### Chapter 19 — Playwright Basics
**Topics:** Playwright setup, browser launch, test structure, navigation, assertions, valid/invalid scenarios

Files:
- `package.json`, `playwright.config.ts`, `.gitignore`
- `sdetlive.pdf`, `caveman.pdf` (reference guides)
- `tests/example.spec.ts`, `tests/example1.spec.ts`
- `tests/valid-scenario-tta-cart.spec.ts`, `tests/invalid-scenario-tta-cart.spec.ts`

---

### Chapter 20 — TypeScript Basics
**Topics:** Strong types, type safety, interfaces, types, generics, union types, type guards, utility types, module system (import/export), classes & objects, encapsulation, inheritance, polymorphism

Files:
**Module files:**
- `utils.js` — Base URL & uppercase formatter (named exports)
- `testutils.js` — Test URL & test name formatter (named exports)
- `logger.js` — Logging with default + named exports

**01_EXPORT_IMPORT/ (ES6 import/export):**
- `168_EXPORT_IMPORT.js` — Basic named import
- `169_Utils.js` — Import with aliases (`as`)
- `170_Logger.js` — Default import
- `ExplainDefault.md` — Default vs named exports explained

**02_CLASS_OBJECT/ (Classes & Objects):**
- `171_Class_Object.js`, `172_Class_Object2.js` — Class basics & constructors
- `173_Car.js` — Car class example
- `174_REAL_Browser.js` — Real browser automation with class
- `175_IQ.js` — Interview questions
- `176_Private_Public.js` — Private/public fields
- `177_Static.js`, `178_Static2.js` — Static methods & properties
- `Calculator.js`, `Student.js` — More class examples

**03_ENCAPSULATION/ (Data Hiding):**
- `179_Ecap.js` — Encapsulation basics with private fields
- `180_REAL_EXAMPLE.js` — Real-world encapsulation (bank account)
- `181_Ecap_Car.js` — Car encapsulation example
- `182_Ecap_Bank.js` — Bank account with getters/setters
- `EX1.js`–`EX5.js` — Encapsulation exercises

**04_INHERITANCE/ (Code Reuse):**
- `183_Single_Inheritance.js` — Single inheritance basics
- `184_SI_Example.js` — Single inheritance example
- `185_Single_Inheritance_Con.js` — Inheritance with constructors
- `186_IQ.js`, `187_IQ2.js` — Inheritance interview questions
- `188_REAL_PageObject_Model.js` — POM pattern via inheritance
- `189_Multiple_Inheritance.js` — Using mixins for multiple inheritance
- `190_Multi_Level_Inheritance.js` — Multi-level inheritance chain
- `191_Hierarchical_inheritance.js` — One parent, many children

**05_Polymorphism/ (Many Forms):**
- `192_Method_Overriding.js` — Method overriding in subclasses

---

## Usage

Run JavaScript files with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
```

Open HTML files in browser:

```bash
start chapter_03_Identifier_Literals/01_identifier_rules.html
```

Install prompt-sync (for chapter 09):

```bash
npm install prompt-sync
```

Run Playwright tests (chapter 19):

```bash
cd chapter_19_Playwright_Basics
npm install
npx playwright install
```
