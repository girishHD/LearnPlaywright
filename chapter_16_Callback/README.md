# Chapter 16 - Callbacks (Functions that Run After Something Finishes)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Callbacks are functions passed as arguments to other functions, executed after an operation completes. This chapter covers synchronous vs asynchronous callbacks, callback patterns, Playwright's callback usage, and the problem of callback hell.

---

## Files in This Chapter

### 143_Callback.js
Basic callback pattern: `placeOrder(item, callback)`. Three ways to pass a callback:
- Named function reference
- Anonymous function
- Arrow function

### 144_CB.js
Additional callback example for pattern recognition.

### 145_CB_Fn.js
Functions that accept other functions as callbacks.

### 146_PW_CB.js
Playwright-style callback — how `test(name, callback)` works:
```js
test("Login Test", () => {
  // test steps
});
```

### 147_JS_CB.js
Async callback with `setTimeout()` — simulates waiting for an API response:
```js
setTimeout(() => console.log("API response received!"), 2000);
```

### 148_Sync_CB.js
Synchronous callback — runs immediately.

### 149_Async_CB.js
Asynchronous callback — runs later after an operation completes.

### 150_CB_Hell.js
Callback hell: deeply nested callbacks create code that expands rightward and becomes unreadable:
```js
openBrowser(() => {
  goToLoginPage(() => {
    enterCredentials(() => {
      clickLogin(() => { console.log("Logged in!"); });
    });
  });
});
```

### 151_CB_Hell_20_Steps.js
20 levels of nested callbacks — an extreme example showing why promises and async/await were created.

### 152_CB_Parameter.js
Passing parameters to callbacks — sending results back.

### 153_CB_Returns.js
Callbacks that return values to the calling code.

---

## Why This Matters

Web testing is inherently asynchronous. Click a button, WAIT for the page to load, THEN check the result — that's a callback pattern. Understanding callbacks provides the foundation for understanding promises and async/await.

---

## What You'll Learn

- Callback: a function that runs after something finishes
- Synchronous callbacks (run now)
- Asynchronous callbacks (run later)
- `setTimeout` for delayed execution
- Playwright's use of callbacks
- Callback hell (deeply nested, unreadable code)

---

## Key Terms

| Term | Definition |
|---|---|
| Callback | A function passed to another function to run later |
| Synchronous | Executes immediately, blocks until done |
| Asynchronous | Executes later, does not block |
| setTimeout | Schedules code to run after a delay |
| Callback Hell | Excessively nested callbacks creating unreadable code |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
