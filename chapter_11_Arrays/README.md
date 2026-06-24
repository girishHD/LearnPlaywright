# Chapter 11 - Arrays (Ordered Collections)

---

## What This Chapter Is

Arrays are ordered lists that store multiple values in a single structure. This chapter covers creating arrays, accessing elements, adding/removing items, searching, transforming, and iterating.

---

## Files in This Chapter

### 83_Arrays.js
First look: `let foods = ["mammoth", "berry", "fish"]`. Index starts at 0 — `foods[0]` is "mammoth". Arrays can mix types: `["caveman", 5, true]`. Real example: `let testResults = ["pass", "pass", "fail", "pass"]`.

### 84_Arrays.js
Different ways to create arrays.

### 85_Access_array.js
Access by index: `myArray[0]` for first, `myArray[myArray.length - 1]` for last.

### 86_Arrays_Adding_Remove.js
Four fundamental array methods:
- `push()`: add to end
- `pop()`: remove from end
- `unshift()`: add to beginning
- `shift()`: remove from beginning

### 87_Adding_Remove2.js
Additional add/remove practice.

### 88_Real_Example.js
Real-world test case array — QA engineers track test results stored in arrays.

### 89_Searching.js
Search methods:
- `indexOf`: find position of an element
- `lastIndexOf`: find last occurrence
- `includes`: check if element exists (boolean)
- `find`: find first element matching a condition
- `findIndex`: get index of first match
- `findLast` / `findLastIndex`: same but search from end

### 90_Iterate.js
Iteration techniques:
- `for` loop: index-based traversal
- `for...of`: direct element access
- `forEach`: functional iteration

### 91_Transform_Array.js
Transformation methods:
- `map()`: transform every element, returns new array
- `filter()`: keep only matching elements
- `reduce()`: combine all elements into a single value

### 92_Array_Sorting.js
`sort()`: arrange elements in order. Numbers need a compare function (default is lexicographic).

### 93_Array_Slicing.js
`slice()`: extract a portion without modifying the original.
`splice()`: extract and remove from the original.

### 94_Concat_Array.js
`concat()`: join two arrays into one.

### 95_Array_Checking.js
`Array.isArray()` to verify if a value is an array. `.length` to get the count of elements.

---

## Why This Matters

Test results are arrays. Lists of test cases, users, and products are all arrays. Arrays combined with loops are incredibly powerful: "For each test case, run it and check the result."

---

## What You'll Learn

- Creating arrays with `[]`
- Accessing elements by index
- Adding/removing: push, pop, unshift, shift
- Searching: indexOf, includes, find
- Iterating: for, for...of, forEach
- Transforming: map, filter, reduce
- Sorting, slicing, splicing, concatenating

---

## Key Terms

| Term | Definition |
|---|---|
| Array | An ordered list of values |
| Index | Numeric position (starts at 0) |
| Push/Pop | Add/remove from the end |
| Shift/Unshift | Add/remove from the beginning |
| Map | Transform every element |
| Filter | Keep only matching elements |
| Reduce | Combine into a single value |
