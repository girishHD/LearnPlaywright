# Chapter 15 - 2D Arrays (Grids and Matrices)

[← Back to Main README](../README.md)

---

## What This Chapter Is

A 2D array is an array of arrays — a grid structure with rows and columns. This chapter covers creating grids, accessing elements with row/column indices, iterating with nested loops, and printing patterns.

---

## Files in This Chapter

### 138_2D_Array.js
Basic 3x3 grid:
```js
let grid = [
  [1, 2, 3],  // row 0
  [4, 5, 6],  // row 1
  [7, 8, 9]   // row 2
];
```
`grid[1][1]` = 5 (row 1, column 1). Nested loops: outer for rows, inner for columns.

### 139_2d.js
Additional 2D array practice with different dimensions.

### 140_REAL.js
Real-world test matrix:
```js
let testMatrix = [
  ["Login Test", "pass", 200],
  ["Signup Test", "fail", 400],
  ["Logout Test", "pass", 200]
];
```
Iterate with `for`, `for...of`, and `forEach` loops.

### 141_2D_Array_Fn.js
Functions that operate on 2D arrays — passing grids to functions for processing.

### 142_IQ_Right_Pattern_Py.js
Star patterns with nested loops. Right triangle:
```
*
**
***
****
```
Outer loop for rows, inner loop for stars in each row.

### Print_Reverse_Pattern.js
Reverse star pattern (decreasing stars):
```
****
***
**
*
```

### Pyramid_Pattern.js
Pyramid pattern — spaces decrease while stars increase:
```
   *
  ***
 *****
*******
```

---

## Why This Matters

2D arrays represent tables, test matrices, spreadsheets, game boards, and maps. Star patterns train the ability to think algorithmically with nested loops.

---

## What You'll Learn

- 2D array = array of arrays (grid)
- Access with `grid[row][col]`
- Nested loop iteration
- Real test matrix examples
- Pattern printing with nested loops

---

## Key Terms

| Term | Definition |
|---|---|
| 2D Array | A grid with rows and columns |
| Nested Loop | A loop inside another loop |
| Test Matrix | A table of test cases and their states |
| Pattern | A visual structure created with symbols |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
