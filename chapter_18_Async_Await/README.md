# Chapter 18 - Async/Await (Writing Asynchronous Code Like Synchronous Code)

[← Back to Main README](../README.md)

---

---

## What This Chapter Is

Async/await is syntactic sugar over promises that makes asynchronous code read like synchronous code. Instead of chaining `.then()` calls, you write step-by-step instructions with `await` before each async operation.

---

## Files in This Chapter

### 161_Async.js
Basic async function:
```js
async function hunt() {
  try {
    let result = await goHunt();
    console.log("Got:", result);
  } catch (error) {
    console.log("Failed:", error);
  } finally {
    console.log("Hunt done");
  }
}
```
- `async` marks a function as asynchronous
- `await` pauses execution until the promise resolves
- `try/catch/finally` handles success, errors, and cleanup

### 162_Async_P2.js
Additional async/await patterns.

### 163_PyDoom.js
Refactoring callback hell into async/await:
```js
// Callback hell:
openBrowser(() => { goToLoginPage(() => { enterCredentials(() => { clickLogin(() => { }); }); }); });

// Async/Await:
async function login() {
  await openBrowser();
  await goToLoginPage();
  await enterCredentials();
  await clickLogin();
}
```

### 164_Async_Ex.js
More async/await practice examples.

### 165_AA_Seq.js
Sequential execution — steps that depend on each other:
```js
let login = await apiCall("Login");
let dashboard = await apiCall("Dashboard");    // needs login
let report = await apiCall("Report");          // needs dashboard
```

### 166_AA_P.js
Parallel execution — steps that can run simultaneously:
```js
let [users, products, orders] = await Promise.all([
  apiCall("Users"),
  apiCall("Products"),
  apiCall("Orders")
]);
```

### 167_IQ.js
Async/await interview questions.

---

## Why This Matters

Playwright tests use async/await everywhere:
```js
await page.goto("url");
await page.fill("#name", "Ugg");
await page.click("#submit");
await expect(page).toHaveTitle("Cave");
```
Every Playwright command needs `await`. This is the most important concept for Playwright testing.

---

## What You'll Learn

- `async` marks a function that contains awaits
- `await` pauses until a promise settles
- `try/catch/finally` for error handling
- Sequential vs parallel execution patterns
- Refactoring callback hell into clean async/await

---

## Key Terms

| Term | Definition |
|---|---|
| Async | Declares a function that can use await |
| Await | Pauses execution until a promise resolves |
| Try | Attempt an operation that might fail |
| Catch | Handle an error if it occurs |
| Finally | Execute code regardless of success or failure |
| Sequential | One operation after another, order matters |
| Parallel | Multiple operations running simultaneously |

---

← [Back to Main README](../README.md)

---

*Happy coding!*
