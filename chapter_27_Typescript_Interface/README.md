# Chapter 27 — TypeScript Interface

---

## What This Chapter Is

This chapter covers TypeScript interfaces — defining object shapes with typed properties, optional fields, and readonly modifiers.

---

## Files in This Chapter

### 201_IF.ts
Basic interface definition — `TestCase` with `id`, `name`, `status`, and `duration` properties. Creating typed objects and accessing their properties.

### 202_IF_Part2.ts
Optional properties with `?` — `APIResponse` interface with required `body` and optional `headers` / `responseTime`.

### 203_IF_READONLY.ts
Readonly properties — `APIResponse` with `readonly statusCode` that cannot be modified after creation.

### 204_IF_ReadOnly.ts
Readonly interfaces — `Point` with readonly `x` and `y`. `ReadonlyArray` for immutable arrays.

---

## Why This Matters

Interfaces are fundamental to TypeScript development. In Playwright testing, interfaces help you:
- Model test data structures (test cases, API responses, user profiles)
- Enforce required fields and prevent accidental mutations
- Document the shape of objects used across your test suite

---

## What You'll Learn

- Defining interfaces with typed properties
- Optional properties with `?`
- Readonly properties with `readonly`
- Creating and using typed objects
- Immutable arrays with `ReadonlyArray`

---

## Key Terms

| Term | Definition |
|---|---|
| Interface | A TypeScript construct that defines the shape of an object |
| Optional Property | A property marked with `?` that may be omitted |
| Readonly | A modifier that prevents property modification after creation |
| ReadonlyArray | An array type that prevents mutation (push, pop, etc.) |
