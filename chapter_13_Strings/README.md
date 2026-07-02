# Chapter 13 - Strings (Working with Text)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Strings represent text in JavaScript. This chapter covers creating strings, inspecting their properties, searching within them, extracting portions, transforming them, and solving classic string problems like anagrams and palindromes.

---

## Files in This Chapter

### 118_Strings.js
Three ways to create strings:
- Single quotes: `'hello'`
- Double quotes: `"hello"`
- Backticks: `` `hello` ``

Includes multi-line strings and `String()` conversion (turning numbers into strings).

### 119_String_Properties.js
- `.length`: number of characters
- `[index]`: access character by position (0-indexed)
- `charAt(index)`: older method for character access

### 120_Search_Check_Str.js
Search methods:
- `includes("abc")`: check if substring exists
- `startsWith("a")`: check if string starts with value
- `endsWith("z")`: check if string ends with value
- `indexOf("abc")`: find position of substring
- `lastIndexOf("abc")`: find last occurrence
- `search(/pattern/)`: search with regex pattern

### 121_Substring.js
Extracting portions:
- `substring(start, end)`: characters from start to end
- `slice(start, end)`: same but supports negative indices
- `substr(start, length)`: legacy method

### 122_Transform_Str.js
Transformation methods:
- `toUpperCase()` / `toLowerCase()`: change case
- `trim()`: remove whitespace from both ends
- `replace(old, new)`: replace first match
- `split(separator)`: divide string into array

### 123_SC.js
String comparison: `"abc" === "abc"` is true; `"abc" === "ABC"` is false (case-sensitive).

### Anagram.js
Anagram checker: two strings are anagrams if they contain the same letters in different order. Solution: sort both strings and compare.

### javascript_stringcheatsheet.md
Reference document listing all common string methods.

### Pallidrome_String.js
Palindrome checker: a word reads the same forward and backward (e.g., "racecar"). Solution: reverse and compare.

### String_Reverse.js
Reverse a string using a `for` loop from the last character to the first.

---

## Why This Matters

Testing involves strings everywhere — page titles, error messages, URLs, button text. Playwright assertions compare strings constantly. Anagram and palindrome problems are common interview questions.

---

## What You'll Learn

- Creating strings with quotes and backticks
- Character count with `.length`
- Searching with includes, indexOf
- Extracting with slice, substring
- Transforming with toUpperCase, replace, split
- Solving anagram and palindrome problems

---

## Key Terms

| Term | Definition |
|---|---|
| String | A sequence of characters |
| Length | The number of characters in a string |
| Substring | A portion of a string |
| Split | Divide a string into an array |
| Trim | Remove surrounding whitespace |
| Anagram | Same letters rearranged into different order |
| Palindrome | String that reads the same forward and backward |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
