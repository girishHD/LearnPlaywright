# Chapter 06 - Operators (Tools for Manipulating Values)

---

## What This Chapter Is

Operators are symbols that perform operations on values — arithmetic, assignment, comparison, logic, and more. This is the largest chapter with 20 files covering the full spectrum of JavaScript operators.

---

## Files in This Chapter

### 30_Assignment_OP.js
`=` assigns the right-side value to the left-side variable. Note: `=` is assignment, not equality comparison.

### 31_Arithmetic_OP.js
Basic math: `+` (add), `-` (subtract), `*` (multiply), `/` (divide).

### 32_Modulus_OP.js
`%` returns the remainder of division. `10 % 3 = 1`. Useful for checking even/odd numbers.

### 33_Expo_OP.js
`**` is the exponentiation operator. `2 ** 3 = 8`.

### 34_Compond_OP.js
Compound assignment: `+=`, `-=`, `*=`, `/=` combine operation with assignment. `x += 5` is shorthand for `x = x + 5`.

### 35_Comparison_OP.js
Comparison operators: `>` (greater), `<` (less), `>=` (greater or equal), `<=` (less or equal), `==` (loose equality), `===` (strict equality). Returns boolean.

### 36_Comparison_Strict_Loose.js
`==` (loose) vs `===` (strict). Loose equality coerces types: `5 == "5"` is `true`. Strict equality checks type and value: `5 === "5"` is `false`.

### 37_IQ_Loose_Strict.js
Interview questions on loose vs strict equality, including edge cases like `0 == false` being `true`.

### 38_Confusing_Comparison.js
Type coercion quirks: `"5" - 3 = 2` (numeric coercion) but `"5" + 3 = "53"` (string concatenation).

### 39_Logical_OP.js
`&&` (AND), `||` (OR), `!` (NOT). Used to combine or invert boolean conditions.

### 40_String_Con_OP.js
`+` concatenates strings: `"cave" + "man" = "caveman"`.

### 41_Ternary_OP.js
`? :` ternary operator — a shorthand if-else: `condition ? valueIfTrue : valueIfFalse`. Includes real examples: HTTP status categorization, SLA checks, browser mode selection.

### 42_Typeof_OP.js
`typeof` returns a string indicating the data type of a value.

### 43_Incre_Decre_OP.js
`++` (increment by 1) and `--` (decrement by 1). Prefix (`++x`) vs postfix (`x++`) differ in when the value is returned.

### 44_Null_OP.js
`??` (nullish coalescing): returns the right-side value if the left side is `null` or `undefined`.

### 45_Post_Increment.js
Deep dive into post-increment: `x++` returns the current value, then increments.

### 46_IQ_Increment.js
Interview questions testing increment operator understanding.

### 47_Advance_ID.js
Advanced increment puzzles like `++a + ++a` and `a++ + ++a`.

### Task_1.js & Task_2.js
Practice tasks: find the largest of 2 numbers, largest of 3 using ternary operators.

---

## Why This Matters

Operators are the tools that make computation possible. Without them, programs can only store data — not transform, compare, or make decisions about it.

---

## What You'll Learn

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Compound assignment: `+=`, `-=`, etc.
- Comparison: `>`, `<`, `==`, `===`, etc.
- Logical: `&&`, `||`, `!`
- Ternary: shorthand conditional expression
- Increment/decrement behavior
- `typeof` and nullish coalescing (`??`)

---

## Key Terms

| Term | Definition |
|---|---|
| Operator | A symbol that performs an operation |
| Assignment | Storing a value in a variable |
| Comparison | Determining the relationship between values |
| Logical | Combining boolean conditions (AND/OR/NOT) |
| Ternary | A three-part conditional expression |
| Modulus | The remainder after division |
| Increment | Increase a value by one |
