# Chapter 08 - Switch Statement (Multi-Case Branching)

---

## What This Chapter Is

When there are many possible values for a single expression, a `switch` statement is cleaner and more readable than a long chain of `if-else` conditions. This chapter covers switch syntax, fall-through behavior, and grouping cases.

---

## Files in This Chapter

### 59_Switch.js
Basic switch statement. Map numbers 1-7 to days of the week. Each `case` is a branch; `break` stops execution from falling through to subsequent cases.

### 60_No_Break.js
Demonstrates fall-through behavior when `break` is omitted — all subsequent cases execute until a break or end of switch.

### 61_Default.js
The `default` case acts as a catch-all when no other case matches.

### 62_REAL_TIME_EXAMPLE.js
Real-world API validation with switch: check HTTP status codes (200, 404, default).

### 63_Switch_Group.js
Group multiple cases together to execute the same code block (e.g., Saturday AND Sunday both mean "rest day").

### 64_IQ.js through 67_IQ4.js
Four interview question files covering tricky switch scenarios: missing breaks, default in unexpected positions, and fall-through patterns.

---

## Why This Matters

Long if-else chains are error-prone and hard to read. Switch provides a cleaner alternative for single-expression multi-branch logic. In testing, switch is useful for status codes, environment names, browser types, and payment methods.

---

## What You'll Learn

- `switch` evaluates one expression against multiple cases
- `break` prevents fall-through
- `default` handles unmatched values
- Grouping cases for shared logic
- Intentional vs accidental fall-through

---

## Key Terms

| Term | Definition |
|---|---|
| Switch | Multi-branch conditional statement |
| Case | A specific value branch |
| Break | Terminates the current case |
| Default | Catch-all case for unmatched values |
| Fall-through | Execution continuing into the next case |
