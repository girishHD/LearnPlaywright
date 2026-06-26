# Chapter 26 — TypeScript (Type Annotations)

---

## What This Chapter Is

This chapter introduces TypeScript type annotations — adding type safety to JavaScript. Covers primitive types, arrays, functions, void, never, unknown, and comprehensive type annotation reference.

---

## Files in This Chapter

### 193_TS.js
Plain JavaScript file — no type annotations. Demonstrates the before-TypeScript state.

### 194_TS_HelloWorld.js / 194_TS_HelloWorld.ts
Side-by-side comparison: the same code in JS (no types) and TS (with types).

### 195_TS_Part1.ts
Basic function with `void` return type — functions that don't return a value.

### 196_TS_Part2.ts
Primitive types: `string`, `number`, `boolean`, `null`, `undefined`. Array syntax with `number[]` and `Array<string>`. The `any` and `unknown` types.

### 197_TS_Part3.ts
Type narrowing with `typeof` guards. Function parameter/return annotations. Arrow function annotations. Inline object type annotations.

### 198_TS_Part4.ts
Return type annotations: `void` vs `never`. Functions that throw or loop forever use `never`.

### 199_IQ.ts
Interview-style typed functions — building API endpoints, checking status codes, logging test steps.

### 200_IQ2.ts
Array filtering with typed function parameters — extracting failed HTTP status codes.

### Type_Annotation_TS.md
Comprehensive reference covering all TypeScript type annotations: primitives, arrays, tuples, enums, objects, functions, union, intersection, type aliases, interfaces, generics, literal types, any, unknown, never, void, optional, index signatures, mapped types, conditional types, template literal types, `this` parameter, and `satisfies`.

---

## Why This Matters

TypeScript catches type-related bugs at compile time. In Playwright testing, type annotations help you:
- Define precise test case structures
- Catch invalid parameters before running tests
- Improve IDE autocomplete and refactoring

---

## What You'll Learn

- Type annotations for variables, functions, and objects
- Primitive types, arrays, and tuples
- `void` vs `never` for function returns
- `any` vs `unknown` for dynamic values
- Type narrowing with `typeof` guards
- Interview-style typed function exercises

---

## Key Terms

| Term | Definition |
|---|---|
| Type Annotation | Explicitly declaring the type of a variable or parameter |
| void | Return type for functions that don't return a value |
| never | Return type for functions that never complete (throw or infinite loop) |
| unknown | Safe version of `any` — requires type checking before use |
| Type Narrowing | Using `typeof` checks to refine an `unknown` type |
