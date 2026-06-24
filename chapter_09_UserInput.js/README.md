# Chapter 09 - User Input (Reading Data During Execution)

---

## What This Chapter Is

This chapter covers how to accept user input while a program is running — making programs interactive rather than static.

---

## Files in This Chapter

### 68_User_Input.js
Uses `prompt()` — the browser-native way to request input via a dialog box. Works only in browser environments.

### 69_Node_readline.js
Uses the `readline` module for Node.js (terminal) environments. Creates an interface, asks a question, waits for input, processes the response, and closes the interface.

### 70_prompy_sync.js
Uses the `prompt-sync` package — a third-party tool that makes `prompt()` work in Node.js. Requires installation but provides a simpler API than `readline`.

---

## Why This Matters

Without input, programs always behave the same way. With input, programs can respond dynamically to different users and situations. In Playwright testing, input comes from test files, config files, and command-line arguments.

---

## What You'll Learn

- `prompt()` for browser environments
- `readline` for Node.js terminal input
- `prompt-sync` for simplified Node.js input
- Programs can pause and wait for user input
- Different environments need different input methods

---

## Key Terms

| Term | Definition |
|---|---|
| Input | Data provided to the program during execution |
| Prompt | A request for user input displayed by the program |
| readline | Node.js built-in module for reading input |
| Interface | The connection between user and program |
