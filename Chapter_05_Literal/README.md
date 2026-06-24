# Chapter 05 - Literals (Raw Data Types in JavaScript)

---

## What This Chapter Is

This chapter covers JavaScript's data types — the raw values (literals) that the language understands natively: numbers, strings, booleans, null, and undefined. It also introduces template literals for string interpolation.

---

## Files in This Chapter

### 22_Literals.js
Introduces all basic data types:
- **Numbers**: `5`, `10`, `-3`
- **Strings**: `"hello"`, `'cave'`
- **Booleans**: `true`, `false`
- **Null**: Intentional empty value
- **Undefined**: Variable declared but not assigned
- `typeof` operator: queries the data type of a value

Note: `typeof null` returns `"object"` — a known JavaScript quirk.

### 23_null_undefined.js
Demonstrates the difference between `null` (intentionally assigned empty value) and `undefined` (no value assigned).

### 24_null.js
Further exploration of `null`.

### 25Literal_All.js
All literal types demonstrated in a single file.

### 26_Literal_Number_All.js
Number literals: integers (`10`), decimals (`3.14`), scientific notation (`5e3` = 5000).

### 27_String.js
String basics: single quotes (`'...'`) and double quotes (`"..."`) are interchangeable.

### 28_Template_Literal.js
Template literals use backticks (`` ` ``) for string interpolation:
```
`I ate ${5} mammoths today`
```
Enables embedding expressions with `${}` and multi-line strings without special characters. Includes real-world examples: API URLs, JSON, Playwright locators.

### 29_Backtick_single_double.js
When to use each quote style:
- Single `' '` for plain strings
- Double `" "` also for plain strings (no difference in JS)
- Backtick `` ` `` for interpolation and multi-line strings

---

## Why This Matters

Every value in JavaScript has a type. Using the wrong type causes errors. Template literals simplify string construction compared to concatenation with `+`.

---

## What You'll Learn

- The five primitive types: number, string, boolean, null, undefined
- `typeof` to identify data types
- Template literals for string interpolation
- Quote styles: single, double, and backtick

---

## Key Terms

| Term | Definition |
|---|---|
| Literal | A raw value written directly in code |
| String | Text enclosed in quotes |
| Boolean | Logical `true` or `false` |
| Null | An intentional empty value |
| Undefined | A variable without an assigned value |
| Template Literal | A string with embedded expressions using backticks |
